import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlService } from './url/url.service';
import { UrlController } from './url/url.controller';
import { UrlModule } from './url/url.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UrlModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'url-shortener',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
