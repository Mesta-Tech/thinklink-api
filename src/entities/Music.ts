import { Entity, Column, OneToMany, JoinColumn, OneToOne, ManyToMany } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Genre } from './Genre';
import { Image } from './Image';
import { UsersMusics } from './Users_Musics';

@Entity({ name: 'musics' })
// eslint-disable-next-line import/prefer-default-export
export class Music extends BaseEntity {
  // * Properties
  @Column()
  title!: string;

  @Column()
  isActive!: boolean;

  // * Relations

  @OneToMany(() => UsersMusics, (ub: UsersMusics) => ub.music, { cascade: true })
  users_musics!: UsersMusics[];

  @OneToOne(() => Image)
  @JoinColumn()
  image!: Image;

  @ManyToMany(() => Genre, (b: Genre) => b.musics)
  genres!: Genre[];
}
