import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { CalendarDomainFacade } from '@server/modules/calendar/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { CalendarApplicationEvent } from './calendar.application.event'
import { CalendarCreateDto } from './calendar.dto'

import { OccasionDomainFacade } from '../../occasion/domain'

@Controller('/v1/occasions')
export class CalendarByOccasionController {
  constructor(
    private occasionDomainFacade: OccasionDomainFacade,

    private calendarDomainFacade: CalendarDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/occasion/:occasionId/calendars')
  async findManyOccasionId(
    @Param('occasionId') occasionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.occasionDomainFacade.findOneByIdOrFail(occasionId)

    const items = await this.calendarDomainFacade.findManyByOccasion(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/occasion/:occasionId/calendars')
  async createByOccasionId(
    @Param('occasionId') occasionId: string,
    @Body() body: CalendarCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, occasionId }

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
