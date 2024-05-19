import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { CalendarDomainModule } from '../domain'
import { CalendarController } from './calendar.controller'

import { FriendDomainModule } from '../../../modules/friend/domain'

import { CalendarByFriendController } from './calendarByFriend.controller'

import { OccasionDomainModule } from '../../../modules/occasion/domain'

import { CalendarByOccasionController } from './calendarByOccasion.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    CalendarDomainModule,

    FriendDomainModule,

    OccasionDomainModule,
  ],
  controllers: [
    CalendarController,

    CalendarByFriendController,

    CalendarByOccasionController,
  ],
  providers: [],
})
export class CalendarApplicationModule {}
