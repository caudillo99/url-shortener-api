"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlService = void 0;
const common_1 = require("@nestjs/common");
const urls_repository_1 = require("./urls.repository");
const typeorm_1 = require("@nestjs/typeorm");
let UrlService = class UrlService {
    constructor(urlRepository) {
        this.urlRepository = urlRepository;
    }
    async getAllUrl(filterDto) {
        return this.urlRepository.getShortenerUrls(filterDto);
    }
    async getShortenerUrl(code) {
        return this.urlRepository.getShortenerUrlByCode(code);
    }
    async createShortUrl(shortener) {
        return this.urlRepository.createShortenerUrl(shortener);
    }
};
UrlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(urls_repository_1.UrlsRepository)),
    __metadata("design:paramtypes", [urls_repository_1.UrlsRepository])
], UrlService);
exports.UrlService = UrlService;
//# sourceMappingURL=url.service.js.map