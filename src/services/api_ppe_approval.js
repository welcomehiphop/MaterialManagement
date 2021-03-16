import httpClient from '@/services/httpClient'
import { ppe_carry } from '@/services/constants'

export const getPPECarry = async(condition) => {
    let result = await httpClient.get(ppe_carry.get_ppe_carry + "?emp_name=" + condition.emp_name + "&docst=" + condition.docst + "&fromDate=" + condition.fromDate + "&toDate=" + condition.toDate)
    return result.data

}

export const getPPECarryByID = async(id) => {
    let result = await httpClient.get(ppe_carry.get_ppe_carry + "/" + `${id}`)
    return result

}


export const postPPEReqCarry = async(data) => {
    let result = await httpClient.post(ppe_carry.post_ppe_req_approve, data)
    return result

}

export const postPPECarrySpare = async(data) => {
    await httpClient.post(ppe_carry.post_ppe_carry_spare, data)
}
export const postPPECarryFile = async(data) => {
    const result = await httpClient.post(ppe_carry.post_ppe_carry_file, data)
    console.log(result)
}

export const getPPESpare = async(spare_code, location_code) => {
    const result = await httpClient.get(ppe_carry.get_ppe_spare + "?spare_code=" + spare_code + "&location=" + location_code)
    return result.data
}

export const getPPELocation = async() => {
    const result = await httpClient.get(ppe_carry.get_ppe_all_location)
    return result.data
}

export const putPPEStatus = async(id, data) => {
    await httpClient.put(ppe_carry.update_ppe_status + "/" + `${id}`, data)
}