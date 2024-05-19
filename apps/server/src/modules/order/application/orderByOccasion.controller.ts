import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OrderDomainFacade } from '@server/modules/order/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OrderApplicationEvent } from './order.application.event'
import { OrderCreateDto } from './order.dto'

import { OccasionDomainFacade } from '../../occasion/domain'

@Controller('/v1/occasions')
export class OrderByOccasionController {
  constructor(
    private occasionDomainFacade: OccasionDomainFacade,

    private orderDomainFacade: OrderDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/occasion/:occasionId/orders')
  async findManyOccasionId(
    @Param('occasionId') occasionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.occasionDomainFacade.findOneByIdOrFail(occasionId)

    const items = await this.orderDomainFacade.findManyByOccasion(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/occasion/:occasionId/orders')
  async createByOccasionId(
    @Param('occasionId') occasionId: string,
    @Body() body: OrderCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, occasionId }

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
