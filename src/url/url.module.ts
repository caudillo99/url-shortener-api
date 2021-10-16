import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlsRepository } from './urls.repository';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

@Module({
  imports: [TypeOrmModule.forFeature([UrlsRepository])],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule {}
