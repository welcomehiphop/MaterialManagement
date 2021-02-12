import Vue from 'vue'
import Vuex from 'vuex'
import approver from "./modules/approver"
import carrier from "./modules/carrier"
import sparereq from "./modules/sparereq"
import sparelist from "./modules/sparelist"
import femonitoring from "./modules/femonitoring"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        approver,
        carrier,
        sparereq,
        sparelist,
        femonitoring
    }
})