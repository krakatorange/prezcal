import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class OrderCreateDto {
  @IsString()
  @IsNotEmpty()
  orderDate: string

  @IsString()
  @IsOptional()
  deliveryDate?: string

  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  @IsOptional()
  occasionId?: string

  @IsString()
  @IsOptional()
  giftId?: string

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

export class OrderUpdateDto {
  @IsString()
  @IsOptional()
  orderDate?: string

  @IsString()
  @IsOptional()
  deliveryDate?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  occasionId?: string

  @IsString()
  @IsOptional()
  giftId?: string

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
