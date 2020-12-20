import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Resource } from '../Resources/Resource';
import { UsersBooks } from './UsersBooks';
import { Genre } from '../Genre';
import { Image } from '../Image';

@Entity({ name: 'books' })
export class Book extends Resource {
  // * Properties
  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false })
  author!: string;

  @Column({ nullable: false })
  literature!: string;

  // * Relations

  @ManyToMany(() => Genre, (g: Genre) => g.books)
  genres!: Genre[];

  @OneToMany(() => UsersBooks, (u: UsersBooks) => u.book)
  users_books!: UsersBooks[];

  @OneToMany(() => Image, (i: Image) => i.book)
  images: Image[];
}
