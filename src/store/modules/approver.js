const state = {
    approve: {}
};

const getters = {
    getApprover: state => state.approve
};

const actions = {

};

const mutations = {
    setApprover(state, approve) {
        state.approve = approve
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};