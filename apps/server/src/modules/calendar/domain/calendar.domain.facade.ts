import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Calendar } from './calendar.model'

import { Friend } from '../../friend/domain'

import { Occasion } from '../../occasion/domain'

@Injectable()
export class CalendarDomainFacade {
  constructor(
    @InjectRepository(Calendar)
    private repository: Repository<Calendar>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Calendar>): Promise<Calendar> {
    return this.repository.save(values)
  }

  async update(item: Calendar, values: Partial<Calendar>): Promise<Calendar> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Calendar): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Calendar> = {},
  ): Promise<Calendar[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Calendar> = {},
  ): Promise<Calendar> {
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

  async findManyByFriend(
    item: Friend,
    queryOptions: RequestHelper.QueryOptions<Calendar> = {},
  ): Promise<Calendar[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('friend')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        friendId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByOccasion(
    item: Occasion,
    queryOptions: RequestHelper.QueryOptions<Calendar> = {},
  ): Promise<Calendar[]> {
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
}
