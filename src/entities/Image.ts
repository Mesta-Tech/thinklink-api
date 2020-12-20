import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from './Resources/Movie';
import { Music } from './Resources/Music';
import { Book } from './Resources/Book';
import BaseEntity from './BaseEntity';
import { User } from './User';

@Entity({ name: 'images' })
export class Image extends BaseEntity {
  // * Properties
  @Column()
  url: string;

  @Column({ name: 'is_main' })
  isMain: boolean;

  @Column({ name: 'is_profile_image' })
  isProfileImage: boolean;

  // * Relations

  @ManyToOne(() => User, (u: User) => u.images, { nullable: true })
  user: User;

  @Column({ nullable: true })
  userId: string;

  //

  @Column()
  movieId!: string;

  @ManyToOne(() => Movie, (r: Movie) => r.images)
  @JoinColumn()
  movie!: Movie;

  @Column()
  bookId!: string;

  @ManyToOne(() => Book, (r: Book) => r.images)
  @JoinColumn()
  book!: Book;

  @Column()
  musicId!: string;

  @ManyToOne(() => Music, (r: Music) => r.images)
  @JoinColumn()
  music!: Music;
}
