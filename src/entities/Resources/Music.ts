import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { UsersMusics } from './UsersMusics';
import { Resource } from './Resource';
import { Genre } from '../Genre';
import { Image } from '../Image';

@Entity({ name: 'musics' })
export class Music extends Resource {
  // * Properties
  @Column({ nullable: false })
  title!: string;

  // * Relations

  @ManyToMany(() => Genre, (g: Genre) => g.musics)
  genres!: Genre[];

  @OneToMany(() => UsersMusics, (u: UsersMusics) => u.music)
  users_musics!: UsersMusics[];

  @OneToMany(() => Image, (i: Image) => i.book)
  images: Image[];
}
