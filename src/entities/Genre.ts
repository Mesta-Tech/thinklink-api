import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Book } from './Book';
import { Movie } from './Movie';
import { Music } from './Music';

@Entity({ name: 'genres' })
// eslint-disable-next-line import/prefer-default-export
export class Genre extends BaseEntity {
  // * Properties
  @Column()
  title!: string;

  // * Relations
  @ManyToMany(() => Book, (b: Book) => b.genres)
  @JoinTable()
  books!: Book[];

  @ManyToMany(() => Music, (m: Music) => m.genres)
  @JoinTable()
  musics!: Music[];

  @ManyToMany(() => Movie, (m: Movie) => m.genres)
  @JoinTable()
  movies!: Movie[];
}
