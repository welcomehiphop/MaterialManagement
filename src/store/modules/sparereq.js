const state = {
    spare: []

}

const getters = {
    getSpare: state => state.spare
}

const actions = {

}

const mutations = {
    setSpare(state, spare) {
        state.spare.push(spare)
    },
    deSpare(state) {
        state.spare.pop()
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}