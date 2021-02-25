import httpClient from "@/services/httpClient";
import { esrc_fe_search } from "@/services/constants"

export const getDeptList = async() => {
    let result = await httpClient.get(esrc_fe_search.get_depart_list)
    return result
}