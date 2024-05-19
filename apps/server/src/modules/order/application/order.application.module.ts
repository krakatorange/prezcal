import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OrderDomainModule } from '../domain'
import { OrderController } from './order.controller'

import { OccasionDomainModule } from '../../../modules/occasion/domain'

import { OrderByOccasionController } from './orderByOccasion.controller'

import { GiftDomainModule } from '../../../modules/gift/domain'

import { OrderByGiftController } from './orderByGift.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    OrderDomainModule,

    OccasionDomainModule,

    GiftDomainModule,
  ],
  controllers: [
    OrderController,

    OrderByOccasionController,

    OrderByGiftController,
  ],
  providers: [],
})
export class OrderApplicationModule {}
