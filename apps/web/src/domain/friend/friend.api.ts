import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Friend } from './friend.model'

export class FriendApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Friend>,
  ): Promise<Friend[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/friends${buildOptions}`)
  }

  static findOne(
    friendId: string,
    queryOptions?: ApiHelper.QueryOptions<Friend>,
  ): Promise<Friend> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/friends/${friendId}${buildOptions}`)
  }

  static createOne(values: Partial<Friend>): Promise<Friend> {
    return HttpService.api.post(`/v1/friends`, values)
  }

  static updateOne(friendId: string, values: Partial<Friend>): Promise<Friend> {
    return HttpService.api.patch(`/v1/friends/${friendId}`, values)
  }

  static deleteOne(friendId: string): Promise<void> {
    return HttpService.api.delete(`/v1/friends/${friendId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Friend>,
  ): Promise<Friend[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/friends${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Friend>,
  ): Promise<Friend> {
    return HttpService.api.post(`/v1/users/user/${userId}/friends`, values)
  }
}
