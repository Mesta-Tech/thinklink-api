import { Entity, Column, ManyToOne, getRepository, Repository } from 'typeorm';
import BaseEntity from './BaseEntity';
import { User } from './User';
import jwt from 'jsonwebtoken';
import getEnv from '../helpers/getEnv';
import nullishPassword from '../helpers/nullishPassword';
import TokenNotFoundException from '../exceptions/TokenNotFoundException';
import TokenExpiredException from '../exceptions/TokenExpiredException';

@Entity({ name: 'tokens' })
export class Token extends BaseEntity {
  // * Properties
  @Column()
  token: string;

  @Column({ default: false })
  isFCMToken: boolean;

  // * Relations

  @ManyToOne(() => User, (u: User) => u.tokens, { nullable: true })
  user: User;

  @Column({ nullable: true })
  userId: string;

  static async verifyToken(authToken: string | undefined): Promise<Token> {
    const tRepo = getRepository(Token);
    const token = await tRepo
      .createQueryBuilder('token')
      .leftJoinAndSelect('token.user', 'user')
      .where('token.token = :token', { token: authToken })
      .getOne();

    if (token) {
      token.user = nullishPassword(token.user);
      try {
        jwt.verify(authToken || '', getEnv('JWT_SECRET'));
        return token;
      } catch (error) {
        throw new TokenExpiredException();
      }
    }
    throw new TokenNotFoundException();
  }
  static async generateToken(user: User): Promise<Token> {
    const tRepo = getRepository(Token);
    const tokenParams = { uid: `${user.id}`, createdAt: `${user.createdAt.toString()}` };
    const token = jwt.sign(tokenParams, getEnv('JWT_SECRET'), {
      algorithm: 'HS512',
      audience: getEnv('HOST'),
    });
    const dbToken = tRepo.create({ isFCMToken: false, token, user });
    const tokenWithUser = await tRepo.save(dbToken);

    void Token.removeOldTokens(tRepo, user);

    return tokenWithUser;
  }
  private static async removeOldTokens(tRepo: Repository<Token>, user: User) {
    const tokens = await tRepo
      .createQueryBuilder('token')
      .where('token.userId = :userId AND token.isFCMToken = FALSE', { userId: user.id })
      .orderBy('token.createdAt', 'DESC')
      .getMany();

    await tRepo.remove(tokens.slice(3));
  }

  static async generateFCMToken(): Promise<void> {
    //TODO Implement / should take user as parameter
  }
}
export interface I_JWT {
  aud: string;
  createdAt: Date;
  iat: number;
  uid: string;
}
