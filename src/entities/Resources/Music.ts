import { Column, ChildEntity } from 'typeorm';
import { Resource } from './Resource';

@ChildEntity()
export class Music extends Resource {
  // * Properties
  @Column({ nullable: false })
  title!: string;
}
