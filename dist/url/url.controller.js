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
exports.UrlController = void 0;
const common_1 = require("@nestjs/common");
const url_service_1 = require("./url.service");
const get_urls_filter_dto_1 = require("./dto/get-urls-filter.dto");
const shortener_url_dto_1 = require("./dto/shortener-url.dto");
let UrlController = class UrlController {
    constructor(urlService) {
        this.urlService = urlService;
    }
    getAllShortenerUrl(url) {
        return this.urlService.getAllUrl(url);
    }
    async redirectFromShortenerUrl(code, res) {
        const url = await this.urlService.getShortenerUrl(code);
        res.redirect(url);
        return;
    }
    createShortUrl(url) {
        return this.urlService.createShortUrl(url);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_urls_filter_dto_1.GetUrlsFilterDto]),
    __metadata("design:returntype", Promise)
], UrlController.prototype, "getAllShortenerUrl", null);
__decorate([
    (0, common_1.Get)('/:code'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UrlController.prototype, "redirectFromShortenerUrl", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortener_url_dto_1.ShortenerUrlDto]),
    __metadata("design:returntype", Promise)
], UrlController.prototype, "createShortUrl", null);
UrlController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [url_service_1.UrlService])
], UrlController);
exports.UrlController = UrlController;
//# sourceMappingURL=url.controller.js.map