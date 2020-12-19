import { Column, ChildEntity } from 'typeorm';
import { Resource } from './Resource';

@ChildEntity()
export class Movie extends Resource {
  // * Properties
  @Column({ nullable: false })
  title!: string;

  @Column()
  year!: number;

  @Column()
  director!: string;

  @Column()
  summary!: string;
}
