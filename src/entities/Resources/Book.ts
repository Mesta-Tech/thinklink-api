import { Column, JoinColumn, OneToOne, ManyToMany, ChildEntity } from 'typeorm';
import { Genre } from '../Genre';
import { Image } from '../Image';
import { Resource } from '../Resources/Resource';

@ChildEntity()
export class Book extends Resource {
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

  @OneToOne(() => Image, { cascade: true })
  @JoinColumn()
  image!: Image;

  @ManyToMany(() => Genre, (b: Genre) => b.resources)
  genres!: Genre[];
}
