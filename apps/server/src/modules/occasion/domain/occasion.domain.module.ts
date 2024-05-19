import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { OccasionDomainFacade } from './occasion.domain.facade'
import { Occasion } from './occasion.model'

@Module({
  imports: [TypeOrmModule.forFeature([Occasion]), DatabaseHelperModule],
  providers: [OccasionDomainFacade, OccasionDomainFacade],
  exports: [OccasionDomainFacade],
})
export class OccasionDomainModule {}
