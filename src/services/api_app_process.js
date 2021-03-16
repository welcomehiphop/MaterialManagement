import httpClient from "@/services/httpClient";
import { esrc_app_process } from "@/services/constants"
// import router from '@/router'

export const getAppList = async() => {
    const response = await httpClient.get(esrc_app_process.get_fe_app_list)
    return response.data
}