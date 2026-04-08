import { IsString, IsArray } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly title: string = '';

  @IsString()
  readonly brand: string = '';

  @IsArray()
  @IsString({ each: true })
  readonly flavors: string[] = [];
}
