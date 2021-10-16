import { Injectable } from '@nestjs/common';
import { UrlsRepository } from './urls.repository';
import { Url } from './url.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUrlsFilterDto } from './dto/get-urls-filter.dto';
import { ShortenerUrlDto } from './dto/shortener-url.dto';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(UrlsRepository)
    private urlRepository: UrlsRepository,
  ) {}

  async getAllUrl(filterDto: GetUrlsFilterDto): Promise<Url[]> {
    return this.urlRepository.getShortenerUrls(filterDto);
  }

  async getShortenerUrl(code: string): Promise<string> {
    return this.urlRepository.getShortenerUrlByCode(code);
  }

  async createShortUrl(shortener: ShortenerUrlDto): Promise<Url> {
    return this.urlRepository.createShortenerUrl(shortener);
  }
}
