import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Occasion } from './occasion.model'

export class OccasionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Occasion>,
  ): Promise<Occasion[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/occasions${buildOptions}`)
  }

  static findOne(
    occasionId: string,
    queryOptions?: ApiHelper.QueryOptions<Occasion>,
  ): Promise<Occasion> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/occasions/${occasionId}${buildOptions}`)
  }

  static createOne(values: Partial<Occasion>): Promise<Occasion> {
    return HttpService.api.post(`/v1/occasions`, values)
  }

  static updateOne(
    occasionId: string,
    values: Partial<Occasion>,
  ): Promise<Occasion> {
    return HttpService.api.patch(`/v1/occasions/${occasionId}`, values)
  }

  static deleteOne(occasionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/occasions/${occasionId}`)
  }

  static findManyByFriendId(
    friendId: string,
    queryOptions?: ApiHelper.QueryOptions<Occasion>,
  ): Promise<Occasion[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/friends/friend/${friendId}/occasions${buildOptions}`,
    )
  }

  static createOneByFriendId(
    friendId: string,
    values: Partial<Occasion>,
  ): Promise<Occasion> {
    return HttpService.api.post(
      `/v1/friends/friend/${friendId}/occasions`,
      values,
    )
  }
}
