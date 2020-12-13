import { Entity, Column, ManyToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import { User } from './User';

@Entity({ name: 'images' })
// eslint-disable-next-line import/prefer-default-export
export class Image extends BaseEntity {
  // * Properties
  @Column()
  url!: string;

  @Column()
  isMain!: boolean;

  // * Relations

  @ManyToOne(() => User, (u: User) => u.images)
  user!: User;

  @Column()
  userId!: string;
}
