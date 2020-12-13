import { Entity, Column, ManyToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Book } from './Book';
import { User } from './User';

@Entity({ name: 'users_books' })
// eslint-disable-next-line import/prefer-default-export
export class UsersBooks extends BaseEntity {
  @Column('boolean', { default: false })
  isFavorite!: boolean;

  @Column()
  bookId!: string;

  @ManyToOne(() => Book, (b: Book) => b.users_books)
  book!: Book;

  @Column()
  userId!: string;

  @ManyToOne(() => User, (b: User) => b.users_books)
  user!: User;
}
