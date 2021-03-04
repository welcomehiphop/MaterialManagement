import httpClient from "@/services/httpClient";
import { it_carry } from "@/services/constants";
// import router from "@/router";

export const getITCarry = async(condition) => {
    let result = await httpClient.get(it_carry.get_it_carry + "?emp_name=" + condition.emp_name + "&docst=" + condition.docst + "&fromDate=" + condition.fromDate + "&toDate=" + condition.toDate)
    return result.data

}
export const getITCarryByID = async(id) => {
    let result = await httpClient.get(it_carry.get_it_carry + "/" + `${id}`)
    console.log(result)
    return result

}

export const getITSpare = async(spare_code, location_code) => {
    const result = await httpClient.get(it_carry.get_it_spare + "?spare_code=" + spare_code + "&location=" + location_code)
    return result.data
}

export const getITLocation = async() => {
    const result = await httpClient.get(it_carry.get_it_all_location)
    return result.data
}

export const postITReqCarry = async(data) => {
    let result = await httpClient.post(it_carry.post_it_req, data)
    return result

}
export const postITCarrySpare = async(data) => {
    await httpClient.post(it_carry.post_it_carry_spare, data)
}

export const postITCarryFile = async(data) => {
    await httpClient.post(it_carry.post_it_carry_file, data)
}