import configDTO from "../models/config.dto"

export default function sanitizer(config: configDTO) {
    config.insertDataOption = config.insertDataOption || 'INSERT_ROWS'
    config.valueInputOption = config.valueInputOption || 'USER_ENTERED'
    config.data = config.data || []
    config.key = config.key || ''

    return config
}