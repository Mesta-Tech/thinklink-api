import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseEntity from '../BaseEntity';
import { User } from '../User';
import { Book } from './Book';

@Entity({ name: 'users_books' })
export class UsersBooks extends BaseEntity {
  // * Properties
  @Column('boolean', { default: false })
  isFavorite: boolean;

  // * Relations
  @Column()
  bookId!: string;

  @ManyToOne(() => Book, (r: Book) => r.users_books)
  @JoinColumn()
  book!: Book;

  @ManyToOne(() => User, (u: User) => u.users_musics)
  @JoinColumn()
  user!: User;

  @Column()
  userId!: string;
}
