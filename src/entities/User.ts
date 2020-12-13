import { Entity, Column, OneToMany, getRepository } from 'typeorm';
import BaseEntity from './BaseEntity';
import { UsersResources } from './Resources/UsersResources';
import { Image } from './Image';
import { Token } from './Token';
@Entity({ name: 'users' })
export class User extends BaseEntity {
  // * Properties
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  birthday!: Date;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  bio: string;

  // * Relations

  @OneToMany(() => Image, (i: Image) => i.user, { cascade: true })
  images: Image[];

  @OneToMany(() => UsersResources, (ur: UsersResources) => ur.user, { cascade: true })
  users_resources: UsersResources[];

  @OneToMany(() => Token, (t: Token) => t.user, { cascade: true })
  tokens: Token[];

  static async findUserByEmail(email: string): Promise<User | undefined> {
    const uRepo = getRepository(User);
    return uRepo.createQueryBuilder('users').where('users.email = :email', { email }).getOne();
  }
}

export type UserT = InstanceType<typeof User>;
