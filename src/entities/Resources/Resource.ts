import { Column, Index } from 'typeorm';
import BaseEntity from '../BaseEntity';

export abstract class Resource extends BaseEntity {
  // * Common Properties

  @Column({ name: 'is_active', default: true })
  isActive!: boolean;

  @Index()
  @Column({ type: 'enum', enum: ['pending', 'approved', 'denied'], default: 'pending' })
  approval_state!: 'pending' | 'approved' | 'denied';
}
