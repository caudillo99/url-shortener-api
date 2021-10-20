"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlsRepository = void 0;
const typeorm_1 = require("typeorm");
const url_entity_1 = require("./url.entity");
const common_1 = require("@nestjs/common");
let UrlsRepository = class UrlsRepository extends typeorm_1.Repository {
    async getShortenerUrls(filterDto) {
        const query = this.createQueryBuilder('url');
        try {
            return await query.getMany();
        }
        catch (e) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async getShortenerUrlByCode(code) {
        const found = await this.findOne({ where: { urlCode: code } });
        if (!found) {
            throw new common_1.NotFoundException(`Cannot find ${code}`);
        }
        return found.redirect;
    }
    async createShortenerUrl(shortenerUrl) {
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
};
UrlsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(url_entity_1.Url)
], UrlsRepository);
exports.UrlsRepository = UrlsRepository;
//# sourceMappingURL=urls.repository.js.map