import httpClient from "@/services/httpClient";
import { apt } from "@/services/constants";


export const getAtpData = async() => {
    let result = await httpClient.get(apt.get_atp_data_list);
    return result.data;
}


export const getAtpDataByID = async(id) => {
    let result = await httpClient.get(apt.get_atp_data_list + "/" + `${id}`);
    return result.data;
}

export const getAtpDataByWeek = async(status, week) => {
    let result
    if (week == "undefined") {
        result = await httpClient.get(apt.get_atp_data_list + "?status=" + `${status}`);
    } else {
        result = await httpClient.get(apt.get_atp_data_list + "?week=" + `${week}` + "&status=" + `${status}`);
    }
    return result.data;

}

export const getAtpDataByEmp = async(empno, status) => {
    let result
    if (empno == "") {
        result = await httpClient.get(apt.get_atp_data_list + "?status=" + `${status}`);
    } else {
        result = await httpClient.get(apt.get_atp_data_list + "?emp=" + `${empno}` + "&status=" + `${status}`)
    }
    return result.data

}

export const deleteData = async(id) => {
    let result = await httpClient.delete(apt.delete_atp_data_list + "/" + `${id}`)
    return (result.data)
}


export const post_test = async data => {
    let result = await httpClient.post(apt.get_atp_data_list(data));
    return result.data
}