import httpClient from "@/services/httpClient";
import { it_mold } from "@/services/constants"
import router from "@/router";

export const getITMold = async(condition) => {
    let result = await httpClient.get(it_mold.get_it_mold + "?spare_code=" + condition.spare_code + "&plant=" + condition.plant)
    return result
}

export const getITMoldByID = async(id) => {
    let result = await httpClient.get(it_mold.get_it_mold + "/" + `${id}`)
    return result
}

export const postITMold = async(data) => {
    let result = await httpClient.post(it_mold.post_it_mold, data).then((resp => {
        if (resp.status == "200") {
            alert("SUCCESS")
            router.push('/esrc/it/molddata').catch(() => {})
        }
    }))
    return result
}

export const putITMold = async(id, data) => {
    let result = await httpClient.put(it_mold.update_it_mold + "/" + `${id}`, data).then((resp => {
        if (resp.status == "200") {
            alert("SUCCESS")
            router.push('/esrc/it/molddata').catch(() => {})
        }
    }))
    return result
}

export const deleteITMold = async(id) => {
    await httpClient.delete(it_mold.delete_it_mold + "/" + `${id}`).then((resp => {
        if (resp.status == "200") {
            alert(resp.data)
            router.push('/esrc/it/molddata').catch(() => {})
        }
    }))
}