//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE = "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE = "An error has occurred. The photo was unable to upload.";
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

export const apiUrl = "http://107.101.81.15:3000";
export const imageUrl = "http://107.101.81.15:3000/image/";


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
    delete_location: 'delete_location',
    post_location: 'post_location'
}

export const esrc_inout = {
    get_inout_list: 'get_inout_list',
    post_inout_gr: 'post_inout_gr',
    get_approve_list: 'get_approve_list',
    get_spare_list: 'get_spare_list',
    post_inout_stock: 'post_inout_stock',
    update_stock_qty: 'update_stock_qty',
    get_carrier_list: 'get_carrier_list'

}

export const esrc_monitoring = {
    get_fe_monitoring: 'get_fe_monitoring',
    get_fe_spare: 'get_fe_spare',
    get_stock_qty: 'get_stock_qty',
    get_ppe_monitoring: 'get_ppe_monitoring',
    get_ppe_spare: 'get_ppe_spare',
    get_it_monitoring: 'get_it_monitoring',
    get_it_spare: 'get_it_spare',
    get_ppe_spare_monitor: 'get_ppe_spare_monitor'
}

export const esrc_appprove = {
    post_req_approve: 'post_req_approve',
    post_spare_approve: 'post_spare_approve',
    post_files_approve: 'post_files_approve',
    post_process_approve: 'post_process_approve',
    post_list_approve: 'post_list_approve',
    get_carry_list: 'get_carry_list',
    get_app_list: 'get_app_list',
    get_all_location: 'get_all_location',
    update_fe_status: 'update_fe_status',
}

export const esrc_fe_search = {
    get_depart_list: 'get_depart_list',
}

export const ppe = {
    get_ppe_mold: 'get_ppe_mold',
    delete_ppe_mold: 'delete_ppe_mold',
    post_ppe_mold: 'post_ppe_mold',
    update_ppe_mold: 'update_ppe_mold',
    get_ppe_location: 'get_ppe_location',
    put_ppe_location: 'put_ppe_location',
    delete_ppe_location: 'delete_ppe_location',
    post_ppe_location: 'post_ppe_location',
    get_ppe_inout: 'get_ppe_inout',
    post_ppe_inout: 'post_ppe_inout',
    post_ppe_stock: 'post_ppe_stock',
    put_ppe_stock: 'put_ppe_stock',
    get_ppe_stock: 'get_ppe_stock'
}
export const ppe_carry = {
    get_ppe_carry: 'get_ppe_carry',
    post_ppe_req_approve: 'post_ppe_req_approve',
    post_ppe_carry_spare: 'post_ppe_carry_spare',
    post_ppe_carry_file: 'post_ppe_carry_file',
    get_ppe_spare: 'get_ppe_spare',
    get_ppe_all_location: 'get_ppe_all_location',
    update_ppe_status: 'update_ppe_status',
}

export const it_mold = {
    post_it_mold: 'post_it_mold',
    delete_it_mold: 'delete_it_mold',
    update_it_mold: 'update_it_mold',
    get_it_mold: 'get_it_mold'
}

export const it_location = {
    get_it_location: 'get_it_location',
    delete_it_location: 'delete_it_location',
    update_it_location: 'update_it_location',
    post_it_location: 'post_it_location'
}

export const it_inout = {
    get_it_inout: 'get_it_inout',
    post_it_inout: 'post_it_inout',
    get_it_stock: 'get_it_stock',
    post_it_stock: 'post_it_stock',
    put_it_stock: 'put_it_stock'
}

export const it_carry = {
    get_it_carry: 'get_it_carry',
    get_it_all_location: 'get_it_all_location',
    get_it_spare_carry: 'get_it_spare_carry',
    post_it_req: 'post_it_req',
    post_it_carry_spare: 'post_it_carry_spare',
    post_it_carry_file: 'post_it_carry_file',
    update_it_status: 'update_it_status'
}

export const esrc_stockview = {
    get_fe_stockview: 'get_fe_stockview',
    get_ppe_stockview: 'get_ppe_stockview',
    get_it_stockview: 'get_it_stockview',
    get_fe_stock_click: 'get_fe_stock_click',
    get_ppe_stock_click: 'get_ppe_stock_click',
    get_it_stock_click: 'get_it_stock_click'
}

export const esrc_app_process = {
    get_fe_app_list: 'get_fe_app_list'
}