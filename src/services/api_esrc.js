import httpClient from "@/services/httpClient";
import { esrc } from "@/services/constants";
import { esrc_location } from "@/services/constants"

export const getEsrcData = async() => {
    let result = await httpClient.get(esrc.get_esrc_list)
    return result.data
}

export const getEsrcDataByID = async id => {
    let result = await httpClient.get(esrc.get_esrc_list + "/" + `${id}`)
    return result.data
}

export const updateEsrcData = async id => {
    let result = await httpClient.get(esrc.update_esrc_list + "/" + `${id}`)
    return result.data
}

export const deleteEsrcData = async id => {
    let result = await httpClient.delete(esrc.delete_esrc_list + "/" + `${id}`)
    return result.data
}


export const getLocation = async() => {
    let result = await httpClient.get(esrc_location.get_location)
    return result.data
}

export const getLocationByID = async id => {
    let result = await httpClient.get(esrc_location.get_location + "/" + `${id}`)
    return result.data
}

export const updateLocation = async(id, data) => {
    let result = await httpClient.put(esrc_location.update_location + "/" + `${id}`, data)
    return result.data
}


export const deleteLocation = async id => {
    let result = await httpClient.delete(esrc_location.delete_location + "/" + `${id}`)
    return result.data
}