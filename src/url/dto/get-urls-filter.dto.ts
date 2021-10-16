import { IsOptional, IsString } from 'class-validator';

export class GetUrlsFilterDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  shortUrl?: string;
}
