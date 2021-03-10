import httpClient from "@/services/httpClient";
import { esrc_appprove } from "@/services/constants"


export const PostApproveProcess = async(data) => {
    let result = await httpClient.post(esrc_appprove.post_req_approve, data)
    return result
}

export const PostApproveSpare = async(data) => {
    let result = await httpClient.post(esrc_appprove.post_spare_approve, data)
    return result
}

export const PostApproveFiles = async(files) => {
    let result = await httpClient.post(esrc_appprove.post_files_approve, files, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    return result
}

export const PostProcessApprove = async(data) => {
    const result = await httpClient.post(esrc_appprove.post_process_approve, data)
    return result
}

export const PostListApprove = async(data) => {
    const result = await httpClient.post(esrc_appprove.post_list_approve, data)
    return result
}

export const GetCarryList = async(data) => {
    const result = await httpClient.get(esrc_appprove.get_carry_list + "?emp_name=" + data.emp_name + "&docst=" + data.docst + "&fromDate=" + data.fromDate + "&toDate=" + data.toDate)
    return result
}


export const GetCarryListByID = async(id) => {
    const result = await httpClient.get(esrc_appprove.get_carry_list + "/" + `${id}`)
    return result
}


export const getAllLocation = async() => {
    const result = await httpClient.get(esrc_appprove.get_all_location)
    return result
}

export const putFeStatus = async(id, data) => {
    const result = await httpClient.put(esrc_appprove.update_fe_status + "/" + `${id}`, data)
    console.log(result)
}