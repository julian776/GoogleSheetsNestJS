import { Injectable } from "@nestjs/common";


@Injectable()
export default class RegexService {
    
    checkRegex(listStr) { 
        const regex = /^([a-zA-Z0-9]+\s?)*$/

        const response = []
        var sumMemoryConsumption = 0
        listStr.map(str => {
            const result = regex.test(str)
            const memoryRound = process.memoryUsage().heapUsed / 1024 / 2048
            sumMemoryConsumption += memoryRound
            response.push([
                result,
                memoryRound
            ])
        })

        response.push([
            `Average memory consumption per round was ${sumMemoryConsumption / listStr.length}`,
            `Total rounds was ${listStr.length}`
        ])

        return response
    }
}