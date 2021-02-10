import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InOutManage from '../views/InOutManage.vue'
import CarryOut from '../views/CarryOut.vue'
import MoldData from '../views/MoldData.vue'
import LocationData from '../views/LocationData.vue'
import Monitoring from '../views/Monitoring.vue'
import Menu from '../components/Main/Menu.vue'
import AddSpare from '../components/AddSpare.vue'
import AddLocation from '../components/AddLocation.vue'
import EditSpare from '../components/EditSpare.vue'
import EditLocation from '../components/EditLocation.vue'
import AddGR from '../components/AddGR.vue'
import AddGI from '../components/AddGI.vue'
import ItemGR from '../components/ItemGR.vue'
import DetailGR from '../components/DetailGR.vue'
import DetailGI from '../components/DetailGI.vue'
import RequestCarry from '../components/RequestCarry.vue'
import TestVuex from '../views/TestVuex.vue'
import PPERoom from '../components/PPERoom.vue'
import Equipment from '../components/Equipment.vue'
import FERoom from '../components/FERoom.vue'

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