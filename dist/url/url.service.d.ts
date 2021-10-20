import { UrlsRepository } from './urls.repository';
import { Url } from './url.entity';
import { GetUrlsFilterDto } from './dto/get-urls-filter.dto';
import { ShortenerUrlDto } from './dto/shortener-url.dto';
export declare class UrlService {
    private urlRepository;
    constructor(urlRepository: UrlsRepository);
    getAllUrl(filterDto: GetUrlsFilterDto): Promise<Url[]>;
    getShortenerUrl(code: string): Promise<string>;
    createShortUrl(shortener: ShortenerUrlDto): Promise<Url>;
}
