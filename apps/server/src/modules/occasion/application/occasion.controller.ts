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
import { Occasion, OccasionDomainFacade } from '@server/modules/occasion/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { OccasionApplicationEvent } from './occasion.application.event'
import { OccasionCreateDto, OccasionUpdateDto } from './occasion.dto'

@Controller('/v1/occasions')
export class OccasionController {
  constructor(
    private eventService: EventService,
    private occasionDomainFacade: OccasionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.occasionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: OccasionCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.occasionDomainFacade.create(body)

    await this.eventService.emit<OccasionApplicationEvent.OccasionCreated.Payload>(
      OccasionApplicationEvent.OccasionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:occasionId')
  async findOne(
    @Param('occasionId') occasionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.occasionDomainFacade.findOneByIdOrFail(
      occasionId,
      queryOptions,
    )

    return item
  }

  @Patch('/:occasionId')
  async update(
    @Param('occasionId') occasionId: string,
    @Body() body: OccasionUpdateDto,
  ) {
    const item = await this.occasionDomainFacade.findOneByIdOrFail(occasionId)

    const itemUpdated = await this.occasionDomainFacade.update(
      item,
      body as Partial<Occasion>,
    )
    return itemUpdated
  }

  @Delete('/:occasionId')
  async delete(@Param('occasionId') occasionId: string) {
    const item = await this.occasionDomainFacade.findOneByIdOrFail(occasionId)

    await this.occasionDomainFacade.delete(item)

    return item
  }
}
