import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Book } from './Resources/Book';
import { Movie } from './Resources/Movie';
import { Music } from './Resources/Music';

@Entity({ name: 'genres' })
export class Genre extends BaseEntity {
  // * Properties
  @Column()
  title!: string;

  // * Relations
  @ManyToMany(() => Book, (b: Book) => b.genres)
  @JoinTable({ name: 'genres_books' })
  books!: Book[];

  @ManyToMany(() => Music, (b: Music) => b.genres)
  @JoinTable({ name: 'genres_musics' })
  musics!: Music[];

  @ManyToMany(() => Movie, (b: Movie) => b.genres)
  @JoinTable({ name: 'genres_movies' })
  movies!: Movie[];
}
