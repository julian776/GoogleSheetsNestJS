import { Body, Controller, Post } from "@nestjs/common";
import RegexService from "../services/regex.service";


@Controller('regex')
export default class RegexController {
    
    constructor (private regexService: RegexService ){

    }

    @Post('evaluate')
    checkMemoryRegex(@Body() listPasswords) {
        return this.regexService.checkRegex(listPasswords)
    }
}