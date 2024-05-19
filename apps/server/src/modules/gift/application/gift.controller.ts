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
import { Gift, GiftDomainFacade } from '@server/modules/gift/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { GiftApplicationEvent } from './gift.application.event'
import { GiftCreateDto, GiftUpdateDto } from './gift.dto'

@Controller('/v1/gifts')
export class GiftController {
  constructor(
    private eventService: EventService,
    private giftDomainFacade: GiftDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.giftDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: GiftCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.giftDomainFacade.create(body)

    await this.eventService.emit<GiftApplicationEvent.GiftCreated.Payload>(
      GiftApplicationEvent.GiftCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:giftId')
  async findOne(@Param('giftId') giftId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.giftDomainFacade.findOneByIdOrFail(
      giftId,
      queryOptions,
    )

    return item
  }

  @Patch('/:giftId')
  async update(@Param('giftId') giftId: string, @Body() body: GiftUpdateDto) {
    const item = await this.giftDomainFacade.findOneByIdOrFail(giftId)

    const itemUpdated = await this.giftDomainFacade.update(
      item,
      body as Partial<Gift>,
    )
    return itemUpdated
  }

  @Delete('/:giftId')
  async delete(@Param('giftId') giftId: string) {
    const item = await this.giftDomainFacade.findOneByIdOrFail(giftId)

    await this.giftDomainFacade.delete(item)

    return item
  }
}
