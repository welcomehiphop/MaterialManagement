const state = {
    carrier: {

    }
}

const getters = {
    getCarrier: state => state.carrier
}

const actions = {

}

const mutations = {
    setCarrier(state, carrier) {
        state.carrier = carrier
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}