import { IsInt, IsString } from 'class-validator';

export class CatDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsInt()
  readonly breed: string;

  @IsInt()
  readonly color: string;
}
