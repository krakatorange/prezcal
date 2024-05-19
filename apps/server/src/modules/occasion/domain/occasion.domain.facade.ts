import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Occasion } from './occasion.model'

import { Friend } from '../../friend/domain'

@Injectable()
export class OccasionDomainFacade {
  constructor(
    @InjectRepository(Occasion)
    private repository: Repository<Occasion>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Occasion>): Promise<Occasion> {
    return this.repository.save(values)
  }

  async update(item: Occasion, values: Partial<Occasion>): Promise<Occasion> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Occasion): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Occasion> = {},
  ): Promise<Occasion[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Occasion> = {},
  ): Promise<Occasion> {
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
    queryOptions: RequestHelper.QueryOptions<Occasion> = {},
  ): Promise<Occasion[]> {
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
}
