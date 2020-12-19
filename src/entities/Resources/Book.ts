import { Column, ChildEntity } from 'typeorm';
import { Resource } from '../Resources/Resource';

@ChildEntity()
export class Book extends Resource {
  // * Properties
  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false })
  author!: string;

  @Column({ nullable: false })
  literature!: string;
}
