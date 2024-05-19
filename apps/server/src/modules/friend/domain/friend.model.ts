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

import { User } from '../../../modules/user/domain'

import { Occasion } from '../../../modules/occasion/domain'

import { Calendar } from '../../../modules/calendar/domain'

@Entity()
export class Friend {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({})
  birthday: string

  @Column({})
  relationship: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.friends)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Occasion, child => child.friend)
  occasions?: Occasion[]

  @OneToMany(() => Calendar, child => child.friend)
  calendars?: Calendar[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
