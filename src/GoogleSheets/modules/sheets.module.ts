import { Module } from "@nestjs/common";
import SheetsController from "../controllers/sheets.controller";
import SheetsService from "../services/sheets.service";

@Module({
    imports: [],
    controllers: [SheetsController],
    providers: [SheetsService],
})
export default class SheetsModule {}