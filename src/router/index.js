import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import InOutManage from '@/views/InOutManage.vue'
import CarryOut from '@/views/CarryOut.vue'
import MoldData from '@/views/MoldData.vue'
import LocationData from '@/views/LocationData.vue'
import Monitoring from '@/views/Monitoring.vue'
import Menu from '@/components/Main/Menu.vue'
import AddSpare from '@/components/AddSpare.vue'
import AddLocation from '@/components/AddLocation.vue'
import EditSpare from '@/components/EditSpare.vue'
import EditLocation from '@/components/EditLocation.vue'
import AddGR from '@/components/AddGR.vue'
import AddGI from '@/components/AddGI.vue'
import ItemGR from '@/components/ItemGR.vue'
import DetailGR from '@/components/DetailGR.vue'
import DetailGI from '@/components/DetailGI.vue'
import RequestCarry from '@/components/RequestCarry.vue'
import TestVuex from '@/views/TestVuex.vue'
import PPERoom from '@/components/PPERoom.vue'
import Equipment from '@/components/Equipment.vue'
import FERoom from '@/components/FERoom.vue'
import CarryDetail from '@/components/CarryDetail.vue'
import StockView from '@/views/StockView.vue'
import Approve from '@/components/Approve.vue'

import PPEMenu from '@/components/Main/PPEMenu.vue'
import PPEInout from '@/views/PPE/InOutManage.vue'
import PPECarryOut from '@/views/PPE/CarryOut.vue'
import PPEMoldData from '@/views/PPE/MoldData.vue'
import PPELocationData from '@/views/PPE/LocationData.vue'
import PPEMonitor from '@/views/PPE/Monitoring.vue'
import PPEAddSpare from '@/components/PPE/AddSpare'
import PPEEditSpare from '@/components/PPE/EditSpare'
import PPEEditLocation from '@/components/PPE/EditLocation'
import PPEAddLocation from '@/components/PPE/AddLocation'
import PPEDetailGR from '@/components/PPE/DetailGR'
import PPEDetailGI from '@/components/PPE/DetailGI'
import PPEAddGR from '@/components/PPE/AddGR'
import PPEAddGI from '@/components/PPE/AddGI'
import PPERequestCarry from '@/components/PPE/RequestCarry'
import PPECarryDetail from '@/components/PPE/CarryDetail'
import PPEStockView from '@/views/PPE/StockView.vue'


import ITMenu from '@/components/Main/ITMenu'
import ITInout from '@/views/IT/InOutManage'
import ITMold from '@/views/IT/MoldData'
import ITAddSpare from '@/components/IT/AddSpare'
import ITEditSpare from '@/components/IT/EditSpare'
import ITLocation from '@/views/IT/LocationData'
import ITEditLocation from '@/components/IT/EditLocation'
import ITAddLocation from '@/components/IT/AddLocation'
import ITDetailGR from '@/components/IT/DetailGR'
import ITDetailGI from '@/components/IT/DetailGI'
import ITAddGR from '@/components/IT/AddGR'
import ITAddGI from '@/components/IT/AddGI'
import ITCarryOut from '@/views/IT/CarryOut'
import ITRequestCarry from '@/components/IT/RequestCarry'
import ITCarryDetail from '@/components/IT/CarryDetail'
import ITMonitoring from '@/views/IT/Monitoring'
import ITStockView from '@/views/IT/StockView.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/testvuex',
        name: 'TestVuex',
        component: TestVuex
    }, {
        path: '/esrc',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        redirect: '/esrc'
    },
    {
        path: '/itemgr',
        name: 'ItemGR',
        component: ItemGR
    },
    {
        path: '*',
        redirect: '/esrc'
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
        children: [{
                path: '/esrc/fe/inout',
                name: 'InOutManage',
                component: InOutManage
            },
            {
                path: '/esrc/fe/carryout',
                name: 'CarryOut',
                component: CarryOut
            },
            {
                path: '/esrc/fe/molddata',
                name: 'MoldData',
                component: MoldData,
            },
            {
                path: '/esrc/fe/locationdata',
                name: 'locationdata',
                component: LocationData
            },
            {
                path: '/esrc/fe/monitoring',
                name: 'monitoring',
                component: Monitoring
            },
            {
                path: '/esrc/fe/addspare',
                name: 'AddSpare',
                component: AddSpare
            },
            {
                path: '/esrc/fe/addlocation',
                name: 'AddLocation',
                component: AddLocation
            },
            {
                path: '/esrc/fe/editspare/:id',
                name: 'EditSpare',
                component: EditSpare
            },
            {
                path: '/esrc/fe/editlocation/:id',
                name: 'EditLocation',
                component: EditLocation
            },
            {
                path: '/esrc/fe/addgr',
                name: 'AddGR',
                component: AddGR
            }, {
                path: '/esrc/fe/addgi',
                name: 'AddGI',
                component: AddGI
            },
            {
                path: '/esrc/fe/detailgr/:id',
                name: 'DetailGR',
                component: DetailGR
            },
            {

                path: '/esrc/fe/detailgi/:id',
                name: 'DetailGI',
                component: DetailGI
            },
            {
                path: '/esrc/fe/requestcarry',
                name: 'Request',
                component: RequestCarry
            },
            {
                path: '/esrc/fe/pperoom',
                name: '/esrc/fe/PPERoom',
                component: PPERoom
            },
            {
                path: '/esrc/fe/equipment',
                name: 'Equipment',
                component: Equipment
            },
            {
                path: '/esrc/fe/feroom',
                name: 'FERoom',
                component: FERoom
            },
            {
                path: '/esrc/fe/carrydetail/:id',
                name: 'CarryDetail',
                component: CarryDetail
            },
            {
                path: '/esrc/fe/approve/:id',
                name: 'Approve',
                component: Approve
            },
            {
                path: '/esrc/fe/stockview',
                name: 'StockView',
                component: StockView
            }
        ]
    },
    {
        path: '/PPEMenu',
        name: 'PPEMenu',
        component: PPEMenu,
        children: [{
                path: '/esrc/ppe/inout',
                name: 'PPEInout',
                component: PPEInout
            },
            {
                path: '/esrc/ppe/carryout',
                name: 'PPECarryOut',
                component: PPECarryOut
            },
            {
                path: '/esrc/ppe/molddata',
                name: 'PPEMoldData',
                component: PPEMoldData
            },
            {
                path: '/esrc/ppe/location',
                name: 'PPELocation',
                component: PPELocationData
            },
            {
                path: '/esrc/ppe/monitoring',
                name: 'PPEMonitoring',
                component: PPEMonitor
            },
            {
                path: '/esrc/ppe/pperoom',
                name: 'PPE_PPERoom',
                component: PPERoom
            },
            {
                path: '/esrc/ppe/equipment',
                name: 'PPE_Equipment',
                component: Equipment
            },
            {
                path: '/esrc/ppe/feroom',
                name: 'PPE_FERoom',
                component: FERoom
            },
            {
                path: '/esrc/ppe/addspare',
                name: 'PPEAddSpare',
                component: PPEAddSpare
            },
            {
                path: '/esrc/ppe/editspare/:id',
                name: 'PPEEditSpare',
                component: PPEEditSpare
            },
            {
                path: '/esrc/ppe/editlocation/:id',
                name: 'PPEEditLocation',
                component: PPEEditLocation
            },
            {
                path: '/esrc/ppe/addlocation',
                name: 'PPEAddLocation',
                component: PPEAddLocation
            },
            {
                path: '/esrc/ppe/detailgr/:id',
                name: 'PPEDetailGR',
                component: PPEDetailGR
            }, {
                path: '/esrc/ppe/detailgi/:id',
                name: 'PPEDetailGI',
                component: PPEDetailGI
            },
            {
                path: '/esrc/ppe/addgr',
                name: 'PPEAddGR',
                component: PPEAddGR
            },
            {
                path: '/esrc/ppe/addgi',
                name: 'PPEAddGI',
                component: PPEAddGI
            },
            {
                path: '/esrc/ppe/requestcarry',
                name: 'PPERequestCarry',
                component: PPERequestCarry
            },
            {
                path: '/esrc/ppe/carrydetail/:id',
                name: 'PPECarryDetail',
                component: PPECarryDetail
            },
            {
                path: '/esrc/ppe/stockview',
                name: 'PPEStockView',
                component: PPEStockView,
            }

        ]
    },
    {
        path: '/itmenu',
        name: 'ITMenu',
        component: ITMenu,
        children: [{
                path: '/esrc/it/inout',
                name: 'ITInout',
                component: ITInout
            },
            {
                path: '/esrc/it/molddata',
                name: 'ITMold',
                component: ITMold
            },
            {
                path: '/esrc/it/addspare',
                name: 'ITAddSpare',
                component: ITAddSpare
            },
            {
                path: '/esrc/it/editspare/:id',
                name: 'ITEditSpare',
                component: ITEditSpare
            },
            {
                path: '/esrc/it/locationdata',
                name: 'ITLocation',
                component: ITLocation
            },
            {
                path: '/esrc/it/editlocation/:id',
                name: 'ITEditLocation',
                component: ITEditLocation
            },
            {
                path: '/esrc/it/addlocation',
                name: 'ITAddLocation',
                component: ITAddLocation
            },
            {
                path: '/esrc/it/detailgr/:id',
                name: 'ITDetailGR',
                component: ITDetailGR
            },
            {
                path: '/esrc/it/detailgi/:id',
                name: 'ITDetailGI',
                component: ITDetailGI
            },
            {
                path: '/esrc/it/addgr',
                name: 'ITAddGR',
                component: ITAddGR
            },
            {
                path: '/esrc/it/addgi',
                name: 'ITAddGI',
                component: ITAddGI
            },
            {
                path: '/esrc/it/carryout',
                name: 'ITCarryOut',
                component: ITCarryOut
            },
            {
                path: '/esrc/it/requestcarry',
                name: 'ITRequestCarry',
                component: ITRequestCarry
            },
            {
                path: '/esrc/it/carrydetail/:id',
                name: 'ITCarryDetail',
                component: ITCarryDetail
            },
            {
                path: '/esrc/it/monitoring',
                name: 'ITMonitoring',
                component: ITMonitoring
            },
            {
                path: '/esrc/it/pperoom',
                name: 'IT_PPERoom',
                component: PPERoom
            },
            {
                path: '/esrc/it/equipment',
                name: 'IT_Equipment',
                component: Equipment
            },
            {
                path: '/esrc/it/feroom',
                name: 'IT_FERoom',
                component: FERoom
            },
            {
                path: '/esrc/it/stockview',
                name: 'ITStockView',
                component: ITStockView,
            }

        ]
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router