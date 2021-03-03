import httpClient from "@/services/httpClient";
import { ppe } from "@/services/constants";
import router from "@/router";

export const getMoldData = async(condition) => {
    let result = await httpClient.get(ppe.get_ppe_mold + "?spare_code=" + condition.spare_code + "&plant=" + condition.plant)
    return result
}

export const getMoldByID = async(id) => {
    let result = await httpClient.get(ppe.get_ppe_mold + "/" + `${id}`)
    return result
}

export const postMoldData = async(data) => {
    let result = await httpClient.post(ppe.post_ppe_mold, data).then((resp => {
        if (resp.status == "200") {
            alert("SUCCESS")
            router.push('/ppe/molddata')
        }
    }))
    return result
}

export const putMoldData = async(id, data) => {
    let result = await httpClient.put(ppe.update_ppe_mold + "/" + `${id}`, data).then((resp => {
        if (resp.status == "200") {
            alert("SUCCESS")
            router.push('/ppe/molddata')
        }
    }))
    return result
}

export const deleteMoldData = async(id) => {
    let result = await httpClient.delete(ppe.delete_ppe_mold + "/" + `${id}`)
    return result.data
}

export const getLocationData = async(condition) => {
    let result = await httpClient.get(ppe.get_ppe_location + "?location_code=" + condition.location_code + "&plant=" + condition.plant)
    return result
}

export const getLocaitonDataByID = async(id) => {
    let result = await httpClient.get(ppe.get_ppe_location + "/" + `${id}`)
    return result
}

export const putLocationData = async(id, data) => {
    await httpClient.put(ppe.put_ppe_location + "/" + `${id}`, data).then((resp => {
        if (resp.status == "200") {
            alert(resp.data)
            router.push('/ppe/location').catch(() => {})
        }
    }))
}

export const deleteLocationData = async(id) => {
    await httpClient.delete(ppe.delete_ppe_location + "/" + `${id}`).then((resp => {
        if (resp.status == "200") {
            alert(resp.data)
            router.push('/ppe/location').catch(() => {})
        }

    }))
}

export const postLocationData = async(data) => {
    await httpClient.post(ppe.post_ppe_location, data).then((resp => {
        if (resp.status == "200") {
            alert(resp.data);
            router.push('/ppe/location').catch(() => {})
        }
    }))
}

export const getInoutData = async(condition) => {
    const result = await httpClient.get(ppe.get_ppe_inout + "?spare_code=" + condition.spare_code + "&movement=" + condition.movement + "&plant=" + condition.plant)
    return result.data
}

export const getInoutDataByID = async(id) => {
    let result = await httpClient.get(ppe.get_ppe_inout + "/" + `${id}`)
    console.log(result)
    return result.data
}

export const postInoutData = async(data) => {
    await httpClient.post(ppe.post_ppe_inout, data)
}

export const postPPEStock = async(data) => {
    await httpClient.post(ppe.post_ppe_stock, data).then((resp => {
        if (resp.status == "200") {
            alert(resp.data)
        }
        router.push('/ppe/inout').catch(() => {})
    }))
}

export const putPPEStock = async(data) => {
    await httpClient.put(ppe.put_ppe_stock, data).then((resp => {
        if (resp.status == "200") {
            alert(resp.data)
        }
        router.push('/ppe/inout').catch(() => {})
    }))

}

export const getPPEStock = async(spare_code, location_code) => {
    const result = await httpClient.get(ppe.get_ppe_stock + "?spare_code=" + spare_code + "&location_code=" + location_code)
    return result

}