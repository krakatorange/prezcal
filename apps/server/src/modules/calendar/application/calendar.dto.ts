import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class CalendarCreateDto {
  @IsString()
  @IsOptional()
  friendId?: string

  @IsString()
  @IsOptional()
  occasionId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class CalendarUpdateDto {
  @IsString()
  @IsOptional()
  friendId?: string

  @IsString()
  @IsOptional()
  occasionId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
