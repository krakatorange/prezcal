import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OrderDomainFacade } from '@server/modules/order/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OrderApplicationEvent } from './order.application.event'
import { OrderCreateDto } from './order.dto'

import { GiftDomainFacade } from '../../gift/domain'

@Controller('/v1/gifts')
export class OrderByGiftController {
  constructor(
    private giftDomainFacade: GiftDomainFacade,

    private orderDomainFacade: OrderDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/gift/:giftId/orders')
  async findManyGiftId(
    @Param('giftId') giftId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.giftDomainFacade.findOneByIdOrFail(giftId)

    const items = await this.orderDomainFacade.findManyByGift(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/gift/:giftId/orders')
  async createByGiftId(
    @Param('giftId') giftId: string,
    @Body() body: OrderCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, giftId }

    const item = await this.orderDomainFacade.create(valuesUpdated)

    await this.eventService.emit<OrderApplicationEvent.OrderCreated.Payload>(
      OrderApplicationEvent.OrderCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
