import httpClient from "@/services/httpClient";
import { it_location } from "@/services/constants"
import router from "@/router";

export const getITLocation = async(condition) => {
    let result = await httpClient.get(it_location.get_it_location + "?location_code=" + condition.location_code + "&plant=" + condition.plant)
    return result.data

}

export const getITLocationByID = async id => {
    let result = await httpClient.get(it_location.get_it_location + "/" + `${id}`)
    return result.data
}

export const putITLocation = async(id, data) => {
    let result = await httpClient.put(it_location.update_it_location + "/" + `${id}`, data).then((resp => {
        if (resp.status == "200") {
            alert("SUCCESS")
            router.push('/it/locationdata')
        }
    }))
    return result
}

export const postITLocation = async(data) => {
    await httpClient.post(it_location.post_it_location, data).then((resp => {
        if (resp.status == "200") {
            alert(resp.data);
            router.push('/it/locationdata').catch(() => {})
        }
    }))
}

export const deleteITLocation = async id => {
    let result = await httpClient.delete(it_location.delete_it_location + "/" + `${id}`).then((resp => {
        if (resp.status == "200") {
            alert(resp.data)
            router.push('/it/locationdata').catch(() => {})
        }
    }))
    return result
}