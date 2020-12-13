import { Column, Entity, ManyToMany, OneToMany, OneToOne, TableInheritance } from 'typeorm';
import BaseEntity from '../BaseEntity';
import { Genre } from '../Genre';
import { UsersResources } from './UsersResources';
import { Image } from '../Image';
@Entity({ name: 'resources' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Resource extends BaseEntity {
  @Column()
  type!: string;

  @OneToMany(() => UsersResources, (ur: UsersResources) => ur.resource)
  users_resources!: UsersResources[];

  @ManyToMany(() => Genre, (g: Genre) => g.resources)
  genres!: Genre[];

  @OneToOne(() => Image)
  image!: Image;
}
