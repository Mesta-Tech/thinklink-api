import { Entity, Column, OneToMany, JoinColumn, OneToOne, ManyToMany } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Genre } from './Genre';
import { Image } from './Image';
import { UsersBooks } from './Users_Books';

@Entity({ name: 'books' })
// eslint-disable-next-line import/prefer-default-export
export class Book extends BaseEntity {
  // * Properties
  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  literature!: string;

  @Column()
  isActive!: boolean;

  // * Relations
  @OneToMany(() => UsersBooks, (ub: UsersBooks) => ub.book, { cascade: true })
  users_books!: UsersBooks[];

  @OneToOne(() => Image)
  @JoinColumn()
  image!: Image;

  @ManyToMany(() => Genre, (b: Genre) => b.books)
  genres!: Genre[];
}
