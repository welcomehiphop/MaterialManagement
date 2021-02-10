import Vue from 'vue'
import Vuex from 'vuex'
import approver from "./modules/approver"
import carrier from "./modules/carrier"
import sparereq from "./modules/sparereq"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: '',
        spare_name: '',
        type: '',
        spare_code: ''
    },
    mutations: {
        setSelected(state, selected) {
            state.selected = selected
        },
        setSpareName(state, spare_name) {
            state.spare_name = spare_name
        },
        setSpareCode(state, spare_code) {
            state.spare_code = spare_code
        },
        setType(state, type) {
            state.type = type
        }
    },
    actions: {

    },
    modules: {
        approver,
        carrier,
        sparereq,
    }
})