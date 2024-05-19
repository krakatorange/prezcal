import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Gift } from './gift.model'

export class GiftApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Gift>,
  ): Promise<Gift[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/gifts${buildOptions}`)
  }

  static findOne(
    giftId: string,
    queryOptions?: ApiHelper.QueryOptions<Gift>,
  ): Promise<Gift> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/gifts/${giftId}${buildOptions}`)
  }

  static createOne(values: Partial<Gift>): Promise<Gift> {
    return HttpService.api.post(`/v1/gifts`, values)
  }

  static updateOne(giftId: string, values: Partial<Gift>): Promise<Gift> {
    return HttpService.api.patch(`/v1/gifts/${giftId}`, values)
  }

  static deleteOne(giftId: string): Promise<void> {
    return HttpService.api.delete(`/v1/gifts/${giftId}`)
  }
}
