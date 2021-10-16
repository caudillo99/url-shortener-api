import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { Url } from './url.entity';
import { GetUrlsFilterDto } from './dto/get-urls-filter.dto';
import { ShortenerUrlDto } from './dto/shortener-url.dto';

@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Get('/')
  getAllShortenerUrl(@Query() url: GetUrlsFilterDto): Promise<Url[]> {
    return this.urlService.getAllUrl(url);
  }

  @Get('/:code')
  async redirectFromShortenerUrl(
    @Param('code') code: string,
    @Res() res,
  ): Promise<void> {
    const url = await this.urlService.getShortenerUrl(code);
    res.redirect(url);
    return;
  }

  @Post('/')
  createShortUrl(@Body() url: ShortenerUrlDto): Promise<Url> {
    return this.urlService.createShortUrl(url);
  }
}
