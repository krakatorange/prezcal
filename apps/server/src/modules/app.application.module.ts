import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { FriendApplicationModule } from './friend/application'

import { OccasionApplicationModule } from './occasion/application'

import { GiftApplicationModule } from './gift/application'

import { OrderApplicationModule } from './order/application'

import { CalendarApplicationModule } from './calendar/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    FriendApplicationModule,

    OccasionApplicationModule,

    GiftApplicationModule,

    OrderApplicationModule,

    CalendarApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
