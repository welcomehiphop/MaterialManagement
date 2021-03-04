import httpClient from "@/services/httpClient";
import { it_inout } from "@/services/constants";
import router from "@/router";

export const getITInout = async(condition) => {
    const result = await httpClient.get(it_inout.get_it_inout + "?spare_code=" + condition.spare_code + "&movement=" + condition.movement + "&plant=" + condition.plant)
    return result.data
}

export const getITInoutByID = async(id) => {
    let result = await httpClient.get(it_inout.get_it_inout + "/" + `${id}`)
    return result.data
}

export const postITInout = async(data) => {
    await httpClient.post(it_inout.post_it_inout, data)
}

export const getITStock = async(spare_code, location_code) => {
    const result = await httpClient.get(it_inout.get_it_stock + "?spare_code=" + `${spare_code}` + "&location_code=" + `${location_code}`)
    return result.data
}

export const postITStock = async(data) => {
    await httpClient.post(it_inout.post_it_stock, data).then((resp => {
        if (resp.status == "200") {
            alert(resp.data)
        }
        router.push('/it/inout').catch(() => {})
    }))
}

export const putITStock = async(data) => {
    await httpClient.put(it_inout.put_it_stock, data).then((resp => {
        if (resp.status == "200") {
            alert(resp.data)
        }
        router.push('/it/inout').catch(() => {})
    }))

}