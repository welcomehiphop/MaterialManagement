import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import AppList from '@/views/AppList'

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
import Approve from '@/views/Approve.vue'

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
import PPEApprove from '@/views/PPE/Approve.vue'



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
import ITApprove from '@/views/IT/Approve.vue'




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
        path: '/applist',
        name: 'AppList',
        component: AppList
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
                path: '/esrc/feroom/inout',
                name: 'InOutManage',
                component: InOutManage
            },
            {
                path: '/esrc/feroom/carryout',
                name: 'CarryOut',
                component: CarryOut
            },
            {
                path: '/esrc/feroom/molddata',
                name: 'MoldData',
                component: MoldData,
            },
            {
                path: '/esrc/feroom/locationdata',
                name: 'locationdata',
                component: LocationData
            },
            {
                path: '/esrc/feroom/monitoring',
                name: 'monitoring',
                component: Monitoring
            },
            {
                path: '/esrc/feroom/addspare',
                name: 'AddSpare',
                component: AddSpare
            },
            {
                path: '/esrc/feroom/addlocation',
                name: 'AddLocation',
                component: AddLocation
            },
            {
                path: '/esrc/feroom/editspare/:id',
                name: 'EditSpare',
                component: EditSpare
            },
            {
                path: '/esrc/feroom/editlocation/:id',
                name: 'EditLocation',
                component: EditLocation
            },
            {
                path: '/esrc/feroom/addgr',
                name: 'AddGR',
                component: AddGR
            }, {
                path: '/esrc/feroom/addgi',
                name: 'AddGI',
                component: AddGI
            },
            {
                path: '/esrc/feroom/detailgr/:id',
                name: 'DetailGR',
                component: DetailGR
            },
            {

                path: '/esrc/feroom/detailgi/:id',
                name: 'DetailGI',
                component: DetailGI
            },
            {
                path: '/esrc/feroom/requestcarry',
                name: 'Request',
                component: RequestCarry
            },
            {
                path: '/esrc/feroom/pperoom',
                name: 'PPERoom',
                component: PPERoom
            },
            {
                path: '/esrc/feroom/equipment',
                name: 'Equipment',
                component: Equipment
            },
            {
                path: '/esrc/feroom/feroom',
                name: 'FERoom',
                component: FERoom
            },
            {
                path: '/esrc/feroom/carrydetail/:id',
                name: 'CarryDetail',
                component: CarryDetail
            },
            {
                path: '/esrc/feroom/approve/:id',
                name: 'Approve',
                component: Approve
            },
            {
                path: '/esrc/feroom/stockview',
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
                path: '/esrc/pperoom/inout',
                name: 'PPEInout',
                component: PPEInout
            },
            {
                path: '/esrc/pperoom/carryout',
                name: 'PPECarryOut',
                component: PPECarryOut
            },
            {
                path: '/esrc/pperoom/molddata',
                name: 'PPEMoldData',
                component: PPEMoldData
            },
            {
                path: '/esrc/pperoom/location',
                name: 'PPELocation',
                component: PPELocationData
            },
            {
                path: '/esrc/pperoom/monitoring',
                name: 'PPEMonitoring',
                component: PPEMonitor
            },
            {
                path: '/esrc/pperoom/pperoom',
                name: 'PPE_PPERoom',
                component: PPERoom
            },
            {
                path: '/esrc/pperoom/equipment',
                name: 'PPE_Equipment',
                component: Equipment
            },
            {
                path: '/esrc/pperoom/feroom',
                name: 'PPE_FERoom',
                component: FERoom
            },
            {
                path: '/esrc/pperoom/addspare',
                name: 'PPEAddSpare',
                component: PPEAddSpare
            },
            {
                path: '/esrc/pperoom/editspare/:id',
                name: 'PPEEditSpare',
                component: PPEEditSpare
            },
            {
                path: '/esrc/pperoom/editlocation/:id',
                name: 'PPEEditLocation',
                component: PPEEditLocation
            },
            {
                path: '/esrc/pperoom/addlocation',
                name: 'PPEAddLocation',
                component: PPEAddLocation
            },
            {
                path: '/esrc/ppe/detailgr/:id',
                name: 'PPEDetailGR',
                component: PPEDetailGR
            }, {
                path: '/esrc/pperoom/detailgi/:id',
                name: 'PPEDetailGI',
                component: PPEDetailGI
            },
            {
                path: '/esrc/pperoom/addgr',
                name: 'PPEAddGR',
                component: PPEAddGR
            },
            {
                path: '/esrc/pperoom/addgi',
                name: 'PPEAddGI',
                component: PPEAddGI
            },
            {
                path: '/esrc/pperoom/requestcarry',
                name: 'PPERequestCarry',
                component: PPERequestCarry
            },
            {
                path: '/esrc/pperoom/carrydetail/:id',
                name: 'PPECarryDetail',
                component: PPECarryDetail
            },
            {
                path: '/esrc/pperoom/stockview',
                name: 'PPEStockView',
                component: PPEStockView,
            },
            {
                path: '/esrc/pperoom/approve/:id',
                name: 'PPEApprove',
                component: PPEApprove
            }

        ]
    },
    {
        path: '/itmenu',
        name: 'ITMenu',
        component: ITMenu,
        children: [{
                path: '/esrc/itroom/inout',
                name: 'ITInout',
                component: ITInout
            },
            {
                path: '/esrc/itroom/molddata',
                name: 'ITMold',
                component: ITMold
            },
            {
                path: '/esrc/itroom/addspare',
                name: 'ITAddSpare',
                component: ITAddSpare
            },
            {
                path: '/esrc/itroom/editspare/:id',
                name: 'ITEditSpare',
                component: ITEditSpare
            },
            {
                path: '/esrc/itroom/locationdata',
                name: 'ITLocation',
                component: ITLocation
            },
            {
                path: '/esrc/itroom/editlocation/:id',
                name: 'ITEditLocation',
                component: ITEditLocation
            },
            {
                path: '/esrc/itroom/addlocation',
                name: 'ITAddLocation',
                component: ITAddLocation
            },
            {
                path: '/esrc/itroom/detailgr/:id',
                name: 'ITDetailGR',
                component: ITDetailGR
            },
            {
                path: '/esrc/itroom/detailgi/:id',
                name: 'ITDetailGI',
                component: ITDetailGI
            },
            {
                path: '/esrc/itroom/addgr',
                name: 'ITAddGR',
                component: ITAddGR
            },
            {
                path: '/esrc/itroom/addgi',
                name: 'ITAddGI',
                component: ITAddGI
            },
            {
                path: '/esrc/itroom/carryout',
                name: 'ITCarryOut',
                component: ITCarryOut
            },
            {
                path: '/esrc/itroom/requestcarry',
                name: 'ITRequestCarry',
                component: ITRequestCarry
            },
            {
                path: '/esrc/itroom/carrydetail/:id',
                name: 'ITCarryDetail',
                component: ITCarryDetail
            },
            {
                path: '/esrc/itroom/monitoring',
                name: 'ITMonitoring',
                component: ITMonitoring
            },
            {
                path: '/esrc/itroom/pperoom',
                name: 'IT_PPERoom',
                component: PPERoom
            },
            {
                path: '/esrc/itroom/equipment',
                name: 'IT_Equipment',
                component: Equipment
            },
            {
                path: '/esrc/itroom/feroom',
                name: 'IT_FERoom',
                component: FERoom
            },
            {
                path: '/esrc/itroom/stockview',
                name: 'ITStockView',
                component: ITStockView,
            },
            {
                path: '/esrc/itroom/approve/:id',
                name: 'ITApprove',
                component: ITApprove
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