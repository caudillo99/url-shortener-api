import { EntityRepository, Repository } from 'typeorm';
import { Url } from './url.entity';
import { GetUrlsFilterDto } from './dto/get-urls-filter.dto';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ShortenerUrlDto } from './dto/shortener-url.dto';

@EntityRepository(Url)
export class UrlsRepository extends Repository<Url> {
  async getShortenerUrls(filterDto: GetUrlsFilterDto): Promise<Url[]> {
    // const { search } = filterDto;
    const query = this.createQueryBuilder('url');
    try {
      return await query.getMany();
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async getShortenerUrlByCode(code: string): Promise<string> {
    const found = await this.findOne({ where: { urlCode: code } });
    if (!found) {
      throw new NotFoundException(`Cannot find ${code}`);
    }
    return found.redirect;
  }

  async createShortenerUrl(shortenerUrl: ShortenerUrlDto): Promise<Url> {
    const baseUrl = 'http://localhost:5000';
    const { redirect } = shortenerUrl;
    const urlCode = Math.random().toString(36).slice(-8);
    const shortUrl = `${baseUrl}/${urlCode}`;

    const url = await this.create({
      redirect,
      urlCode,
      shortUrl,
    });

    await this.save(url);
    return url;
  }
}
