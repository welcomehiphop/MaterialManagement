const state = {
    spare: {

    }
}

const getters = {
    getSpare: state => state.spare
}

const actions = {

}

const mutations = {
    setSpare(state, spare) {
        state.spare = spare
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}