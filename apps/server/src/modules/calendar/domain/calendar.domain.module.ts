import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { CalendarDomainFacade } from './calendar.domain.facade'
import { Calendar } from './calendar.model'

@Module({
  imports: [TypeOrmModule.forFeature([Calendar]), DatabaseHelperModule],
  providers: [CalendarDomainFacade, CalendarDomainFacade],
  exports: [CalendarDomainFacade],
})
export class CalendarDomainModule {}
