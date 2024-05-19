import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Friend } from '../../../modules/friend/domain'

import { Occasion } from '../../../modules/occasion/domain'

@Entity()
export class Calendar {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  friendId: string

  @ManyToOne(() => Friend, parent => parent.calendars)
  @JoinColumn({ name: 'friendId' })
  friend?: Friend

  @Column({})
  occasionId: string

  @ManyToOne(() => Occasion, parent => parent.calendars)
  @JoinColumn({ name: 'occasionId' })
  occasion?: Occasion

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
