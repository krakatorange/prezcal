import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { FriendDomainModule } from '../domain'
import { FriendController } from './friend.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { FriendByUserController } from './friendByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, FriendDomainModule, UserDomainModule],
  controllers: [FriendController, FriendByUserController],
  providers: [],
})
export class FriendApplicationModule {}
