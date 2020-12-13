import { Column, Entity, ManyToOne } from 'typeorm';
import BaseEntity from '../BaseEntity';
import { User } from '../User';
import { Resource } from './Resource';

@Entity({ name: 'users_resources' })
export class UsersResources extends BaseEntity {
  // * Properties
  @Column('boolean', { default: false })
  isFavorite: boolean;

  // * Relations
  @Column()
  resourceId!: string;

  @ManyToOne(() => Resource, (r: Resource) => r.users_resources)
  resource!: Resource;

  @ManyToOne(() => User, (u: User) => u.users_resources)
  user!: User;

  @Column()
  userId!: string;
}
