import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Order } from './order.model'

import { Occasion } from '../../occasion/domain'

import { Gift } from '../../gift/domain'

@Injectable()
export class OrderDomainFacade {
  constructor(
    @InjectRepository(Order)
    private repository: Repository<Order>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Order>): Promise<Order> {
    return this.repository.save(values)
  }

  async update(item: Order, values: Partial<Order>): Promise<Order> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Order): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Order> = {},
  ): Promise<Order[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Order> = {},
  ): Promise<Order> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByOccasion(
    item: Occasion,
    queryOptions: RequestHelper.QueryOptions<Order> = {},
  ): Promise<Order[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('occasion')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        occasionId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByGift(
    item: Gift,
    queryOptions: RequestHelper.QueryOptions<Order> = {},
  ): Promise<Order[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('gift')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        giftId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
