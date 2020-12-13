import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Resource } from './Resources/Resource';

@Entity({ name: 'genres' })
export class Genre extends BaseEntity {
  // * Properties
  @Column()
  title!: string;

  // * Relations
  @ManyToMany(() => Resource, (b: Resource) => b.genres)
  @JoinTable({ name: 'genres_resources' })
  resources!: Resource[];
}
