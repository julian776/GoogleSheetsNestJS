import { Injectable } from "@nestjs/common";
import ConfigDTO from "../models/config.dto";

import { auth } from "src/utils/auth";
import { google } from "googleapis";
const sheets = google.sheets('v4')

@Injectable()
export default class SheetsService {

    getAllData(spreadsheetId: string) {
        return sheets.spreadsheets.get({
            auth,
            spreadsheetId
        }).catch(err => err.message)
    }

    async getValuesOnRange({spreadsheetId, range}){
        return await sheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range
        }).then(value => value.data).catch(err => err.message)
    }

    append({spreadsheetId, range, valueInputOption, insertDataOption, data}: ConfigDTO) {
        return sheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range,
            valueInputOption,
            insertDataOption,
            requestBody: {
                values: data
            }
        }).catch(err => err.message)
    }

    update({spreadsheetId, range, valueInputOption, data}) {
        return sheets.spreadsheets.values.update({
            auth,
            spreadsheetId,
            range,
            valueInputOption,
            requestBody: {
                values: data
            }
        }).catch(err => err.message)
    }
    
    async updateByKey({spreadsheetId, range, data, key, valueInputOption}){
        const response = await this.getValuesOnRange({
            spreadsheetId,
            range
        })
        const rangeSplited = response.range.split('!')
        const firstValueOnRange = parseInt(rangeSplited[1][1])
        const indexOfKey = response.values.findIndex(element => element[0] === key)
        const rowToUpdate = firstValueOnRange + indexOfKey
        
        if(indexOfKey === -1) return `Not possible to find ${key}`
        
        const rangeToUpdate = `${rangeSplited[0]}!${rangeSplited[1][0]}${rowToUpdate}`
        await sheets.spreadsheets.values.update({
            auth,
            spreadsheetId,
            range: rangeToUpdate,
            valueInputOption,
            requestBody: {
                values: data
            }
        }).catch(error => console.error(error.message))
    }

    delete(config: ConfigDTO) {
        
    }
}