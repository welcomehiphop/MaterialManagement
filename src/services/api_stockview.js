import httpClient from '@/services/httpClient'
import { esrc_stockview } from '@/services/constants'

export const getFeStockView = async() => {
    const result = await httpClient.get(esrc_stockview.get_fe_stockview)
    return result.data
}

export const getFeStockClick = async(condition) => {
    const result = await httpClient.get(esrc_stockview.get_fe_stock_click + "?location=" + condition.location + "&plant=" + condition.plant)
    console.log(result)
    return result.data
}

export const getPPEStockView = async() => {
    const result = await httpClient.get(esrc_stockview.get_ppe_stockview)
    console.log(result)
    return result.data
}

export const getPPEStockClick = async(condition) => {
    const result = await httpClient.get(esrc_stockview.get_ppe_stock_click + "?location=" + condition.location + "&plant=" + condition.plant)
    console.log(result)
    return result.data
}

export const getITStockView = async() => {
    const result = await httpClient.get(esrc_stockview.get_it_stockview)
    console.log(result)
    return result.data
}

export const getITStockClick = async(condition) => {
    const result = await httpClient.get(esrc_stockview.get_it_stock_click + "?location=" + condition.location + "&plant=" + condition.plant)
    console.log(result)
    return result.data
}