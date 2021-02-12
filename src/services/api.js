import * as apiAtp from "@/services/api_atp.js"
import * as apiESRC from "@/services/api_esrc.js"
import * as apiESRCMonitoring from "@/services/api_monitoring.js"



export default {
    ...apiAtp,
    ...apiESRC,
    ...apiESRCMonitoring
};