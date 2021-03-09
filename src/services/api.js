import * as apiESRC from "@/services/api_esrc.js"
import * as apiESRCMonitoring from "@/services/api_monitoring.js"
import * as apiApprove from "@/services/api_approve"
import * as apiSearch from "@/services/api_search"
import * as apiPPE from "@/services/api_ppe"
import * as apiPPEApproval from '@/services/api_ppe_approval'
import * as apiITMold from '@/services/api_it_mold'
import * as apiITLocation from '@/services/api_it_location'
import * as apiITInout from '@/services/api_it_inout'
import * as apiCarryout from '@/services/api_it_carry'

export default {
    ...apiESRC,
    ...apiESRCMonitoring,
    ...apiApprove,
    ...apiSearch,
    ...apiPPE,
    ...apiPPEApproval,
    ...apiITMold,
    ...apiITLocation,
    ...apiITInout,
    ...apiCarryout
};