import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { CalendarDomainFacade } from '@server/modules/calendar/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { CalendarApplicationEvent } from './calendar.application.event'
import { CalendarCreateDto } from './calendar.dto'

import { FriendDomainFacade } from '../../friend/domain'

@Controller('/v1/friends')
export class CalendarByFriendController {
  constructor(
    private friendDomainFacade: FriendDomainFacade,

    private calendarDomainFacade: CalendarDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/friend/:friendId/calendars')
  async findManyFriendId(
    @Param('friendId') friendId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.friendDomainFacade.findOneByIdOrFail(friendId)

    const items = await this.calendarDomainFacade.findManyByFriend(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/friend/:friendId/calendars')
  async createByFriendId(
    @Param('friendId') friendId: string,
    @Body() body: CalendarCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, friendId }

    const item = await this.calendarDomainFacade.create(valuesUpdated)

    await this.eventService.emit<CalendarApplicationEvent.CalendarCreated.Payload>(
      CalendarApplicationEvent.CalendarCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
