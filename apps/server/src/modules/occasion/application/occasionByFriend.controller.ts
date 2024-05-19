import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OccasionDomainFacade } from '@server/modules/occasion/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OccasionApplicationEvent } from './occasion.application.event'
import { OccasionCreateDto } from './occasion.dto'

import { FriendDomainFacade } from '../../friend/domain'

@Controller('/v1/friends')
export class OccasionByFriendController {
  constructor(
    private friendDomainFacade: FriendDomainFacade,

    private occasionDomainFacade: OccasionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/friend/:friendId/occasions')
  async findManyFriendId(
    @Param('friendId') friendId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.friendDomainFacade.findOneByIdOrFail(friendId)

    const items = await this.occasionDomainFacade.findManyByFriend(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/friend/:friendId/occasions')
  async createByFriendId(
    @Param('friendId') friendId: string,
    @Body() body: OccasionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, friendId }

    const item = await this.occasionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<OccasionApplicationEvent.OccasionCreated.Payload>(
      OccasionApplicationEvent.OccasionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
