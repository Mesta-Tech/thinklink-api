import { Column, OneToOne, JoinColumn, ManyToMany, ChildEntity } from 'typeorm';
import { Genre } from '../Genre';
import { Image } from '../Image';
import { Resource } from './Resource';

@ChildEntity()
export class Movie extends Resource {
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

  @OneToOne(() => Image)
  @JoinColumn()
  image!: Image;

  @ManyToMany(() => Genre, (b: Genre) => b.resources)
  genres!: Genre[];
}
