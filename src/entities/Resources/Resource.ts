import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  TableInheritance,
} from 'typeorm';
import BaseEntity from '../BaseEntity';
import { Genre } from '../Genre';
import { UsersResources } from './UsersResources';
import { Image } from '../Image';
@Entity({ name: 'resources' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Resource extends BaseEntity {
  // * Common Properties
  @Column()
  type!: string;

  @Column({ name: 'is_active', default: true })
  isActive!: boolean;

  @Index()
  @Column({ type: 'enum', enum: ['pending', 'approved', 'denied'], default: 'pending' })
  approval_state!: string;

  // * Relations
  @OneToMany(() => UsersResources, (ur: UsersResources) => ur.resource)
  users_resources: UsersResources[];

  @ManyToMany(() => Genre, (g: Genre) => g.resources)
  genres!: Genre[];

  @OneToOne(() => Image, { cascade: true })
  @JoinColumn()
  image!: Image;
}
