import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OccasionDomainModule } from '../domain'
import { OccasionController } from './occasion.controller'

import { FriendDomainModule } from '../../../modules/friend/domain'

import { OccasionByFriendController } from './occasionByFriend.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    OccasionDomainModule,

    FriendDomainModule,
  ],
  controllers: [OccasionController, OccasionByFriendController],
  providers: [],
})
export class OccasionApplicationModule {}
