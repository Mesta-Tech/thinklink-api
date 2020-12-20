import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseEntity from '../BaseEntity';
import { User } from '../User';
import { Music } from './Music';

@Entity({ name: 'users_musics' })
export class UsersMusics extends BaseEntity {
  // * Properties
  @Column('boolean', { default: false })
  isFavorite: boolean;

  // * Relations
  @Column()
  musicId!: string;

  @ManyToOne(() => Music, (r: Music) => r.users_musics)
  @JoinColumn()
  music!: Music;

  @ManyToOne(() => User, (u: User) => u.users_musics)
  @JoinColumn()
  user!: User;

  @Column()
  userId!: string;
}
