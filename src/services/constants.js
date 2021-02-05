//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE = "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE = "An error has occurred. The photo was unable to upload.";
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

export const apiUrl = "http://localhost:3000";
export const imageUrl = "http://localhost:3000/images";
export const resumeUrl = "http://localhost:3000/resume";


export const tnsm = {
    get_tnsm_system_group: `tnsm_system_group`,
};

export const apt = {
    get_atp_data_list: 'atp_get_list',
    delete_atp_data_list: 'atp_delete_list'
};

export const esrc = {
    get_esrc_list: 'get_esrc_list',
    get_esrc_list_id: 'get_esrc_list_id',
    update_esrc_list: 'update_esrc_list',
    post_esrc_list: 'post_esrc_list',
    delete_esrc_list: 'delete_esrc_list',
}

export const esrc_location = {
    get_location: 'get_location',
    update_location: 'update_location',
    delete_location: 'delete_location'
}

export const esrc_inout = {
    get_inout_list: 'get_inout_list',
    post_inout_gr: 'post_inout_gr',
    get_approve_list: 'get_approve_list'
}



export const test = {
    post_test: 'atp_get_list',
    atp_get_list_update: 'atp_get_list_update'
}