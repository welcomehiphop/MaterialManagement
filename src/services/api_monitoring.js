import httpClient from "@/services/httpClient";
import { esrc_monitoring } from "@/services/constants"


export const getFeRoom = async() => {
    let result = await httpClient.get(esrc_monitoring.get_fe_monitoring)
    return result
}