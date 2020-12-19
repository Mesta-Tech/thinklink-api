import { Entity, Column, ManyToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import { User } from './User';

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
}
export interface I_JWT {
  aud: string;
  createdAt: Date;
  iat: number;
  uid: string;
}
