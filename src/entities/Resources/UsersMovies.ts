import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseEntity from '../BaseEntity';
import { User } from '../User';
import { Movie } from './Movie';

@Entity({ name: 'users_movies' })
export class UsersMovies extends BaseEntity {
  // * Properties
  @Column('boolean', { default: false })
  isFavorite: boolean;

  // * Relations
  @Column()
  movieId!: string;

  @ManyToOne(() => Movie, (r: Movie) => r.users_movies)
  @JoinColumn()
  movie!: Movie;

  @ManyToOne(() => User, (u: User) => u.users_movies)
  @JoinColumn()
  user!: User;

  @Column()
  userId!: string;
}
