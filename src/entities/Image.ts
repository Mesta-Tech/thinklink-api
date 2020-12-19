import { Entity, Column, ManyToOne, OneToOne } from 'typeorm';
import BaseEntity from './BaseEntity';
import { Resource } from './Resources/Resource';
import { User } from './User';

@Entity({ name: 'images' })
export class Image extends BaseEntity {
  // * Properties
  @Column()
  url: string;

  @Column({ name: 'is_main' })
  isMain: boolean;

  @Column({ name: 'is_profile_image' })
  isProfileImage: boolean;

  // * Relations

  @ManyToOne(() => User, (u: User) => u.images, { nullable: true })
  user: User;

  @Column({ nullable: true })
  userId: string;

  @OneToOne(() => Resource, { nullable: true })
  resource: Resource;
}
