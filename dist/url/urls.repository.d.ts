import { Repository } from 'typeorm';
import { Url } from './url.entity';
import { GetUrlsFilterDto } from './dto/get-urls-filter.dto';
import { ShortenerUrlDto } from './dto/shortener-url.dto';
export declare class UrlsRepository extends Repository<Url> {
    getShortenerUrls(filterDto: GetUrlsFilterDto): Promise<Url[]>;
    getShortenerUrlByCode(code: string): Promise<string>;
    createShortenerUrl(shortenerUrl: ShortenerUrlDto): Promise<Url>;
}
