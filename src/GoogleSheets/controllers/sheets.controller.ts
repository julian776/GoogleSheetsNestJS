import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common"
import ConfigDTO from "../models/config.dto"
import SheetsService from "../services/sheets.service"
import sanitizer from "../helpers/sanitizer"

@Controller('sheets')
export default class SheetsController {

    constructor(private sheetsService: SheetsService){

    }

    @Get('all-data/:Id')
    getAll (@Param('Id') spreadsheetId: string) {
        return this.sheetsService.getAllData(spreadsheetId)
    }

    @Post('get-data')
    getValues(@Body() config:ConfigDTO){
        return this.sheetsService.getValuesOnRange(config)
    }

    @Post('append')
    appendRow (@Body() config: ConfigDTO) {
        return this.sheetsService.append(sanitizer(config))
    }

    @Put('update')
    update(@Body() config: ConfigDTO) {
        return this.sheetsService.update(sanitizer(config))
    }

    @Put('key')
    updateByKey(@Body() config: ConfigDTO) {
        return this.sheetsService.updateByKey(sanitizer(config))
    }

    @Delete('del')
    delete(@Body() config: ConfigDTO) {
        return this.sheetsService.delete(sanitizer(config))
    }
}