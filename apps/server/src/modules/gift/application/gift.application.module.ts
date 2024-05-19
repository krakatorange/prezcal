import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { GiftDomainModule } from '../domain'
import { GiftController } from './gift.controller'

@Module({
  imports: [AuthenticationDomainModule, GiftDomainModule],
  controllers: [GiftController],
  providers: [],
})
export class GiftApplicationModule {}
