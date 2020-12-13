import { Entity, Column, ManyToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Movie } from './Movie';
import { User } from './User';

@Entity({ name: 'users_movies' })
// eslint-disable-next-line import/prefer-default-export
export class UsersMovies extends BaseEntity {
  @Column('boolean', { default: false })
  isFavorite!: boolean;

  @Column()
  movieId!: string;

  @ManyToOne(() => Movie, (b: Movie) => b.users_movies)
  movie!: Movie;

  @Column()
  userId!: string;

  @ManyToOne(() => User, (b: User) => b.users_movies)
  user!: User;
}
