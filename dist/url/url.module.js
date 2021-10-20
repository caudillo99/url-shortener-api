"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const urls_repository_1 = require("./urls.repository");
const url_controller_1 = require("./url.controller");
const url_service_1 = require("./url.service");
let UrlModule = class UrlModule {
};
UrlModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([urls_repository_1.UrlsRepository])],
        controllers: [url_controller_1.UrlController],
        providers: [url_service_1.UrlService],
    })
], UrlModule);
exports.UrlModule = UrlModule;
//# sourceMappingURL=url.module.js.map