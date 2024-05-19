import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { FriendDomainFacade } from './friend.domain.facade'
import { Friend } from './friend.model'

@Module({
  imports: [TypeOrmModule.forFeature([Friend]), DatabaseHelperModule],
  providers: [FriendDomainFacade, FriendDomainFacade],
  exports: [FriendDomainFacade],
})
export class FriendDomainModule {}
