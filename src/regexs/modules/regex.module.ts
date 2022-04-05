import { Module } from "@nestjs/common";
import RegexController from "../controllers/regex.controller";
import RegexService from "../services/regex.service";


@Module({
    controllers: [RegexController],
    providers: [RegexService]
})
export default class RegexModule {}