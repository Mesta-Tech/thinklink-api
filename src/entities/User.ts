import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Image } from './Image';
import { Content } from './test';
import { UsersBooks } from './Users_Books';
import { UsersMovies } from './Users_Movies';
import { UsersMusics } from './Users_Musics';

@Entity({ name: 'users' })
// eslint-disable-next-line import/prefer-default-export
export class User extends BaseEntity {
  // * Properties
  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  birthday!: Date;

  @Column({ nullable: true })
  gender!: string;

  @Column({ nullable: true })
  country!: string;

  @Column({ nullable: true })
  bio!: string;

  // * Relations

  @OneToMany(() => UsersBooks, (ub: UsersBooks) => ub.user, { cascade: true })
  users_books!: UsersBooks[];

  @OneToMany(() => UsersMusics, (ub: UsersMusics) => ub.user, { cascade: true })
  users_musics!: UsersMusics[];

  @OneToMany(() => UsersMovies, (ub: UsersMovies) => ub.user, { cascade: true })
  users_movies!: UsersMovies[];

  @OneToMany(() => Image, (i: Image) => i.user, { cascade: true })
  images!: Image[];
}
