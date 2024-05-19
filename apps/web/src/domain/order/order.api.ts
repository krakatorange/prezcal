import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Order } from './order.model'

export class OrderApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Order>,
  ): Promise<Order[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/orders${buildOptions}`)
  }

  static findOne(
    orderId: string,
    queryOptions?: ApiHelper.QueryOptions<Order>,
  ): Promise<Order> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/orders/${orderId}${buildOptions}`)
  }

  static createOne(values: Partial<Order>): Promise<Order> {
    return HttpService.api.post(`/v1/orders`, values)
  }

  static updateOne(orderId: string, values: Partial<Order>): Promise<Order> {
    return HttpService.api.patch(`/v1/orders/${orderId}`, values)
  }

  static deleteOne(orderId: string): Promise<void> {
    return HttpService.api.delete(`/v1/orders/${orderId}`)
  }

  static findManyByOccasionId(
    occasionId: string,
    queryOptions?: ApiHelper.QueryOptions<Order>,
  ): Promise<Order[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/occasions/occasion/${occasionId}/orders${buildOptions}`,
    )
  }

  static createOneByOccasionId(
    occasionId: string,
    values: Partial<Order>,
  ): Promise<Order> {
    return HttpService.api.post(
      `/v1/occasions/occasion/${occasionId}/orders`,
      values,
    )
  }

  static findManyByGiftId(
    giftId: string,
    queryOptions?: ApiHelper.QueryOptions<Order>,
  ): Promise<Order[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/gifts/gift/${giftId}/orders${buildOptions}`)
  }

  static createOneByGiftId(
    giftId: string,
    values: Partial<Order>,
  ): Promise<Order> {
    return HttpService.api.post(`/v1/gifts/gift/${giftId}/orders`, values)
  }
}
