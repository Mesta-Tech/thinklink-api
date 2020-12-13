import { Entity, Column, ManyToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Music } from './Music';
import { User } from './User';

@Entity({ name: 'users_musics' })
// eslint-disable-next-line import/prefer-default-export
export class UsersMusics extends BaseEntity {
  @Column('boolean', { default: false })
  isFavorite!: boolean;

  @Column()
  musicId!: string;

  @ManyToOne(() => Music, (b: Music) => b.users_musics)
  music!: Music;

  @Column()
  userId!: string;

  @ManyToOne(() => User, (b: User) => b.users_musics)
  user!: User;
}
