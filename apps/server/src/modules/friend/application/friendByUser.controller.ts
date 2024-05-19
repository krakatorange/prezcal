import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { FriendDomainFacade } from '@server/modules/friend/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { FriendApplicationEvent } from './friend.application.event'
import { FriendCreateDto } from './friend.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class FriendByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private friendDomainFacade: FriendDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/friends')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.friendDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/friends')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: FriendCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.friendDomainFacade.create(valuesUpdated)

    await this.eventService.emit<FriendApplicationEvent.FriendCreated.Payload>(
      FriendApplicationEvent.FriendCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
