import httpClient from "@/services/httpClient";
import { esrc, esrc_inout } from "@/services/constants";
import { esrc_location } from "@/services/constants"
import router from "@/router";

export const getEsrcData = async(data) => {
    let result = await httpClient.get(esrc.get_esrc_list + "?spare_code=" + data.spare_code + "&plant=" + data.plant)
    return result.data
}

export const getEsrcDataByID = async id => {
    let result = await httpClient.get(esrc.get_esrc_list + "/" + `${id}`)
    return result.data
}

export const updateEsrcData = async(id, data) => {
    let result = await httpClient.put(esrc.update_esrc_list + "/" + `${id}`, data)
    alert(result.data)
    router.push('/esrc/fe/molddata').catch(() => {})
}

export const deleteEsrcData = async id => {
    let result = await httpClient.delete(esrc.delete_esrc_list + "/" + `${id}`)
    return result.data
}

export const postEsrcData = async(data) => {
    let result = await httpClient.post(esrc.post_esrc_list, data)
    alert(result.data)
    router.push('/esrc/fe/molddata').catch(() => {})
}

export const getLocation = async(condition) => {
    let result = await httpClient.get(esrc_location.get_location + "?location_code=" + condition.location_code + "&plant=" + condition.plant)
    return result.data
}

export const getLocationByID = async id => {
    let result = await httpClient.get(esrc_location.get_location + "/" + `${id}`)
    return result.data
}
export const postLocation = async(data) => {
    const result = await httpClient.post(esrc_location.post_location, data)
    alert(result.data)
    router.push('/esrc/fe/locationdata').catch(() => {})
}

export const updateLocation = async(id, data) => {
    let result = await httpClient.put(esrc_location.update_location + "/" + `${id}`, data)
    alert(result.data)
    router.push('/esrc/fe/locationdata').catch(() => {})
}

export const deleteLocation = async id => {
    let result = await httpClient.delete(esrc_location.delete_location + "/" + `${id}`)
    alert(result.data)
}

export const getInout = async(spare_code, movement, plant) => {
        let result = await httpClient.get(esrc_inout.get_inout_list + "?spare_code=" + `${spare_code}` + "&movement=" + `${movement}` + "&plant=" + `${plant}`)
        return result.data
    }
    // axios.get('https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate', {
    //     onDownloadProgress: (progressEvent) => {

//         let percentCompleted = Math.round(progressEvent.loaded * 100 /
//             progressEvent.total);
//         console.log(progressEvent.lengthComputable);
//         console.log(percentCompleted);

//     }
// })

export const getInoutByID = async(id) => {
    let result = await httpClient.get(esrc_inout.get_inout_list + "/" + `${id}`)
    return result.data
}

export const postInoutGR = async(data) => {
    await httpClient.post(esrc_inout.post_inout_gr, data).then((resp => {
        if (resp.status == "200") {
            alert("SUCCESS");
            router.push("/esrc/fe/inout")
        }
    }))
}

export const postInoutStock = async(data) => {
    await httpClient.post(esrc_inout.post_inout_stock, data)
}

export const UpdateInoutStock = async(data) => {
    await httpClient.put(esrc_inout.update_stock_qty, data)
}

export const getApprover = async(deptcd, usrnm) => {
    let result = await httpClient.get(esrc_inout.get_approve_list + "?deptcd=" + `${deptcd}` + "&usrnm=" + `${usrnm}`)
    return result.data
}

export const getCarrierList = async(deptcd, usrnm) => {
    let result = await httpClient.get(esrc_inout.get_carrier_list + "?deptcd=" + `${deptcd}` + "&usrnm=" + `${usrnm}`)
    return result
}

export const getSparePart = async(location, spare_code) => {
    let result = await httpClient.get(esrc_inout.get_spare_list + "?location=" + `${location}` + "&spare_code=" + `${spare_code}`)
    return result.data

}