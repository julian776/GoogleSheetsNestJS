import { Module } from '@nestjs/common';
import SheetsModule from './GoogleSheets/modules/sheets.module';
import RegexModule from './regexs/modules/regex.module';

@Module({
  imports: [SheetsModule, RegexModule], //TODO: Without import here
  controllers: [],
  providers: [],
})
export class AppModule {}
