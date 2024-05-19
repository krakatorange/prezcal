import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationFriendSubscriber } from './subscribers/notification.friend.subscriber'

import { NotificationOccasionSubscriber } from './subscribers/notification.occasion.subscriber'

import { NotificationGiftSubscriber } from './subscribers/notification.gift.subscriber'

import { NotificationOrderSubscriber } from './subscribers/notification.order.subscriber'

import { NotificationCalendarSubscriber } from './subscribers/notification.calendar.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationFriendSubscriber,

    NotificationOccasionSubscriber,

    NotificationGiftSubscriber,

    NotificationOrderSubscriber,

    NotificationCalendarSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
