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
import { Calendar, CalendarDomainFacade } from '@server/modules/calendar/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { CalendarApplicationEvent } from './calendar.application.event'
import { CalendarCreateDto, CalendarUpdateDto } from './calendar.dto'

@Controller('/v1/calendars')
export class CalendarController {
  constructor(
    private eventService: EventService,
    private calendarDomainFacade: CalendarDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.calendarDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: CalendarCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.calendarDomainFacade.create(body)

    await this.eventService.emit<CalendarApplicationEvent.CalendarCreated.Payload>(
      CalendarApplicationEvent.CalendarCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:calendarId')
  async findOne(
    @Param('calendarId') calendarId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.calendarDomainFacade.findOneByIdOrFail(
      calendarId,
      queryOptions,
    )

    return item
  }

  @Patch('/:calendarId')
  async update(
    @Param('calendarId') calendarId: string,
    @Body() body: CalendarUpdateDto,
  ) {
    const item = await this.calendarDomainFacade.findOneByIdOrFail(calendarId)

    const itemUpdated = await this.calendarDomainFacade.update(
      item,
      body as Partial<Calendar>,
    )
    return itemUpdated
  }

  @Delete('/:calendarId')
  async delete(@Param('calendarId') calendarId: string) {
    const item = await this.calendarDomainFacade.findOneByIdOrFail(calendarId)

    await this.calendarDomainFacade.delete(item)

    return item
  }
}
