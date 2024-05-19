import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { FriendDomainModule } from './friend/domain'

import { OccasionDomainModule } from './occasion/domain'

import { GiftDomainModule } from './gift/domain'

import { OrderDomainModule } from './order/domain'

import { CalendarDomainModule } from './calendar/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    FriendDomainModule,

    OccasionDomainModule,

    GiftDomainModule,

    OrderDomainModule,

    CalendarDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
