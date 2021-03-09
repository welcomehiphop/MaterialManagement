import httpClient from "@/services/httpClient";
import { esrc_monitoring } from "@/services/constants"


export const getFeRoom = async(stock) => {
    let result = await httpClient.get(esrc_monitoring.get_fe_monitoring + "?stock=" + `${stock}`)
    return result
}

export const getFeSpare = async(stock) => {
    let result = await httpClient.get(esrc_monitoring.get_fe_spare + "?stock=" + `${stock}`)
    return result
}

export const getPPERoom = async(stock) => {
    let result = await httpClient.get(esrc_monitoring.get_ppe_monitoring + "?stock=" + `${stock}`)
    return result
}

export const getPPEMonitor = async(stock) => {
    let result = await httpClient.get(esrc_monitoring.get_ppe_spare_monitor + "?stock=" + `${stock}`)
    return result
}

export const getITRoom = async(stock) => {
    let result = await httpClient.get(esrc_monitoring.get_it_monitoring + "?stock=" + `${stock}`)
    return result
}

export const getITMonitor = async(stock) => {
    let result = await httpClient.get(esrc_monitoring.get_it_spare + "?stock=" + `${stock}`)
    return result
}

export const getStockQty = async(spare_code, location_code) => {
    let result = await httpClient.get(esrc_monitoring.get_stock_qty + "?spare_code=" + `${spare_code}` + "&location_code=" + `${location_code}`)
    return result
}