import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { GiftDomainFacade } from './gift.domain.facade'
import { Gift } from './gift.model'

@Module({
  imports: [TypeOrmModule.forFeature([Gift]), DatabaseHelperModule],
  providers: [GiftDomainFacade, GiftDomainFacade],
  exports: [GiftDomainFacade],
})
export class GiftDomainModule {}
