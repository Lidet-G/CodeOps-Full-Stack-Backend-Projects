import { Type } from 'class-transformer';
import { IsInt, IsString, Length, Min } from 'class-validator';

export class CreateDishDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  restaurantId!: number;

  @IsString()
  @Length(2, 100)
  name!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  priceSantim!: number;
}
