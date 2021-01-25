import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InOutManage from '../views/InOutManage.vue'
import CarryOut from '../views/CarryOut.vue'
import MoldData from '../views/MoldData.vue'
import LocationData from '../views/LocationData.vue'
import Monitoring from '../views/Monitoring.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
}, {
    path: '/',
    redirect: '/home'
}, {
    path: '*',
    redirect: '/home'
}, {
    path: '/inoutmanage',
    name: 'InOutManage',
    component: InOutManage
}, {
    path: '/carryout',
    name: 'CarryOut',
    component: CarryOut
}, {
    path: '/molddata',
    name: 'MoldData',
    component: MoldData
}, {
    path: '/locationdata',
    name: 'locationdata',
    component: LocationData
}, {
    path: '/monitoring',
    name: 'monitoring',
    component: Monitoring
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router