import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Friend, FriendDomainFacade } from '@server/modules/friend/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { FriendApplicationEvent } from './friend.application.event'
import { FriendCreateDto, FriendUpdateDto } from './friend.dto'

@Controller('/v1/friends')
export class FriendController {
  constructor(
    private eventService: EventService,
    private friendDomainFacade: FriendDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.friendDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: FriendCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.friendDomainFacade.create(body)

    await this.eventService.emit<FriendApplicationEvent.FriendCreated.Payload>(
      FriendApplicationEvent.FriendCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:friendId')
  async findOne(@Param('friendId') friendId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.friendDomainFacade.findOneByIdOrFail(
      friendId,
      queryOptions,
    )

    return item
  }

  @Patch('/:friendId')
  async update(
    @Param('friendId') friendId: string,
    @Body() body: FriendUpdateDto,
  ) {
    const item = await this.friendDomainFacade.findOneByIdOrFail(friendId)

    const itemUpdated = await this.friendDomainFacade.update(
      item,
      body as Partial<Friend>,
    )
    return itemUpdated
  }

  @Delete('/:friendId')
  async delete(@Param('friendId') friendId: string) {
    const item = await this.friendDomainFacade.findOneByIdOrFail(friendId)

    await this.friendDomainFacade.delete(item)

    return item
  }
}
