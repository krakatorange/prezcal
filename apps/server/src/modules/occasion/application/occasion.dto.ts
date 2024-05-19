import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class OccasionCreateDto {
  @IsString()
  @IsNotEmpty()
  date: string

  @IsString()
  @IsNotEmpty()
  occasionType: string

  @IsString()
  @IsOptional()
  friendId?: string

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

export class OccasionUpdateDto {
  @IsString()
  @IsOptional()
  date?: string

  @IsString()
  @IsOptional()
  occasionType?: string

  @IsString()
  @IsOptional()
  friendId?: string

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
