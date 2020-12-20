import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { UsersMovies } from './UsersMovies';
import { Resource } from './Resource';
import { Genre } from '../Genre';
import { Image } from '../Image';

@Entity({ name: 'movies' })
export class Movie extends Resource {
  // * Properties
  @Column({ nullable: false })
  title!: string;

  @Column()
  year!: number;

  @Column()
  director!: string;

  @Column()
  summary!: string;

  // * Relations

  @ManyToMany(() => Genre, (g: Genre) => g.movies)
  genres!: Genre[];

  @OneToMany(() => UsersMovies, (u: UsersMovies) => u.movie)
  users_movies!: UsersMovies[];

  @OneToMany(() => Image, (i: Image) => i.book)
  images: Image[];
}
