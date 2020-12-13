import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Genre } from './Genre';
import { Image } from './Image';
import { UsersMovies } from './Users_Movies';

@Entity({ name: 'movies_and_series' })
// eslint-disable-next-line import/prefer-default-export
export class Movie extends BaseEntity {
  // * Properties
  @Column()
  title!: string;

  @Column()
  year!: number;

  @Column()
  director!: string;

  @Column()
  summary!: string;

  @Column()
  isActive!: boolean;

  // * Relations
  @OneToMany(() => UsersMovies, (ub: UsersMovies) => ub.movie, { cascade: true })
  users_movies!: UsersMovies[];

  @OneToOne(() => Image)
  @JoinColumn()
  image!: Image;

  @ManyToMany(() => Genre, (b: Genre) => b.movies)
  genres!: Genre[];
}
