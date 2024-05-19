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

import { Order } from '../../../modules/order/domain'

import { Calendar } from '../../../modules/calendar/domain'

@Entity()
export class Occasion {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  date: string

  @Column({})
  occasionType: string

  @Column({})
  friendId: string

  @ManyToOne(() => Friend, parent => parent.occasions)
  @JoinColumn({ name: 'friendId' })
  friend?: Friend

  @OneToMany(() => Order, child => child.occasion)
  orders?: Order[]

  @OneToMany(() => Calendar, child => child.occasion)
  calendars?: Calendar[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
