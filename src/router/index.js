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




Vue.use(VueRouter)

const routes = [{
        path: '/testvuex',
        name: 'TestVuex',
        component: TestVuex
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/itemgr',
        name: 'ItemGR',
        component: ItemGR
    },
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
        children: [{
                path: '/inoutmanage',
                name: 'InOutManage',
                component: InOutManage
            },
            {
                path: '/carryout',
                name: 'CarryOut',
                component: CarryOut
            },
            {
                path: '/molddata',
                name: 'MoldData',
                component: MoldData,
            },
            {
                path: '/locationdata',
                name: 'locationdata',
                component: LocationData
            },
            {
                path: '/monitoring',
                name: 'monitoring',
                component: Monitoring
            },
            {
                path: '/addspare',
                name: 'AddSpare',
                component: AddSpare
            },
            {
                path: '/addlocation',
                name: 'AddLocation',
                component: AddLocation
            },
            {
                path: '/editspare/:id',
                name: 'EditSpare',
                component: EditSpare
            },
            {
                path: '/editlocation/:id',
                name: 'EditLocation',
                component: EditLocation
            },
            {
                path: '/addgr',
                name: 'AddGR',
                component: AddGR
            }, {
                path: '/addgi',
                name: 'AddGI',
                component: AddGI
            },
            {
                path: '/detailgr/:id',
                name: 'DetailGR',
                component: DetailGR
            },
            {

                path: '/detailgi/:id',
                name: 'DetailGI',
                component: DetailGI
            },
            {
                path: '/requestcarry',
                name: 'Request',
                component: RequestCarry
            },
            {
                path: '/pperoom',
                name: 'PPERoom',
                component: PPERoom
            },
            {
                path: '/equipment',
                name: 'Equipment',
                component: Equipment
            },
            {
                path: '/feroom',
                name: 'FERoom',
                component: FERoom
            },
            {
                path: '/carrydetail/:id',
                name: 'CarryDetail',
                component: CarryDetail
            }
        ]
    },
    {
        path: '/PPEMenu',
        name: 'PPEMenu',
        component: PPEMenu,
        children: [{
                path: '/ppe/inout',
                name: 'PPEInout',
                component: PPEInout
            },
            {
                path: '/ppe/carryout',
                name: 'PPECarryOut',
                component: PPECarryOut
            },
            {
                path: '/ppe/molddata',
                name: 'PPEMoldData',
                component: PPEMoldData
            },
            {
                path: '/ppe/location',
                name: 'PPELocation',
                component: PPELocationData
            },
            {
                path: '/ppe/monitoring',
                name: 'PPEMonitoring',
                component: PPEMonitor
            },
            {
                path: '/ppe/pperoom',
                name: 'PPE_PPERoom',
                component: PPERoom
            },
            {
                path: '/ppe/equipment',
                name: 'PPE_Equipment',
                component: Equipment
            },
            {
                path: '/ppe/feroom',
                name: 'PPE_FERoom',
                component: FERoom
            },
            {
                path: '/ppe/addspare',
                name: 'PPEAddSpare',
                component: PPEAddSpare
            },
            {
                path: '/ppe/editspare/:id',
                name: 'PPEEditSpare',
                component: PPEEditSpare
            },
            {
                path: '/ppe/editlocation/:id',
                name: 'PPEEditLocation',
                component: PPEEditLocation
            },
            {
                path: '/ppe/addlocation',
                name: 'PPEAddLocation',
                component: PPEAddLocation
            },
            {
                path: '/ppe/detailgr/:id',
                name: 'PPEDetailGR',
                component: PPEDetailGR
            }, {
                path: '/ppe/detailgi/:id',
                name: 'PPEDetailGI',
                component: PPEDetailGI
            },
            {
                path: '/ppe/addgr',
                name: 'PPEAddGR',
                component: PPEAddGR
            },
            {
                path: '/ppe/addgi',
                name: 'PPEAddGI',
                component: PPEAddGI
            },
            {
                path: '/ppe/requestcarry',
                name: 'PPERequestCarry',
                component: PPERequestCarry
            },
            {
                path: '/ppe/carrydetail/:id',
                name: 'PPECarryDetail',
                component: PPECarryDetail
            }

        ]
    },
    {
        path: '/itmenu',
        name: 'ITMenu',
        component: ITMenu,
        children: [{
                path: '/it/inout',
                name: 'ITInout',
                component: ITInout
            },
            {
                path: '/it/molddata',
                name: 'ITMold',
                component: ITMold
            },
            {
                path: '/it/addspare',
                name: 'ITAddSpare',
                component: ITAddSpare
            },
            {
                path: '/it/editspare/:id',
                name: 'ITEditSpare',
                component: ITEditSpare
            },
            {
                path: '/it/locationdata',
                name: 'ITLocation',
                component: ITLocation
            },
            {
                path: '/it/editlocation/:id',
                name: 'ITEditLocation',
                component: ITEditLocation
            },
            {
                path: '/it/addlocation',
                name: 'ITAddLocation',
                component: ITAddLocation
            },
            {
                path: '/it/detailgr/:id',
                name: 'ITDetailGR',
                component: ITDetailGR
            },
            {
                path: '/it/detailgi/:id',
                name: 'ITDetailGI',
                component: ITDetailGI
            },
            {
                path: '/it/addgr',
                name: 'ITAddGR',
                component: ITAddGR
            },
            {
                path: '/it/addgi',
                name: 'ITAddGI',
                component: ITAddGI
            },
            {
                path: '/it/carryout',
                name: 'ITCarryOut',
                component: ITCarryOut
            },
            {
                path: '/it/requestcarry',
                name: 'ITRequestCarry',
                component: ITRequestCarry
            },
            {
                path: '/it/carrydetail/:id',
                name: 'ITCarryDetail',
                component: ITCarryDetail
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