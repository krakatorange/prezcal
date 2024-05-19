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

import { Occasion } from '../../../modules/occasion/domain'

import { Gift } from '../../../modules/gift/domain'

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  orderDate: string

  @Column({ nullable: true })
  deliveryDate?: string

  @Column({})
  status: string

  @Column({})
  occasionId: string

  @ManyToOne(() => Occasion, parent => parent.orders)
  @JoinColumn({ name: 'occasionId' })
  occasion?: Occasion

  @Column({})
  giftId: string

  @ManyToOne(() => Gift, parent => parent.orders)
  @JoinColumn({ name: 'giftId' })
  gift?: Gift

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
