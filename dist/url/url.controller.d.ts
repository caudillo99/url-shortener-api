import { UrlService } from './url.service';
import { Url } from './url.entity';
import { GetUrlsFilterDto } from './dto/get-urls-filter.dto';
import { ShortenerUrlDto } from './dto/shortener-url.dto';
export declare class UrlController {
    private urlService;
    constructor(urlService: UrlService);
    getAllShortenerUrl(url: GetUrlsFilterDto): Promise<Url[]>;
    redirectFromShortenerUrl(code: string, res: any): Promise<void>;
    createShortUrl(url: ShortenerUrlDto): Promise<Url>;
}
