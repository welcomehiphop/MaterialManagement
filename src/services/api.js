import * as apiAtp from "@/services/api_atp.js"
import * as apiESRC from "@/services/api_esrc.js"
import * as apiESRCMonitoring from "@/services/api_monitoring.js"
import * as apiApprove from "@/services/api_approve"
import * as apiSearch from "@/services/api_search"



export default {
    ...apiAtp,
    ...apiESRC,
    ...apiESRCMonitoring,
    ...apiApprove,
    ...apiSearch,
};