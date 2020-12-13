import { Column, JoinColumn, OneToOne, ManyToMany, ChildEntity } from 'typeorm';
import { Genre } from '../Genre';
import { Image } from '../Image';
import { Resource } from './Resource';

@ChildEntity()
export class Music extends Resource {
  // * Properties
  @Column()
  title!: string;

  @Column()
  isActive!: boolean;

  // * Relations

  @OneToOne(() => Image)
  @JoinColumn()
  image!: Image;

  @ManyToMany(() => Genre, (b: Genre) => b.resources)
  genres!: Genre[];
}
