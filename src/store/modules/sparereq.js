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
        if (state.spare == '') {
            state.spare.push(spare)
        }
        let status = state.spare.some((el) => {
            return (el.spare_code == spare.spare_code && el.location == spare.location);
        });
        if (status === false) {
            state.spare.push(spare)
        }
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