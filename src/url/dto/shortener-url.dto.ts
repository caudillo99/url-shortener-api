import { IsNotEmpty } from 'class-validator';

export class ShortenerUrlDto {
  @IsNotEmpty()
  redirect: string;
}
