    const state = {
        selected: {}
    }

    const getters = {
        allSpare: state => state.selected
    }

    const mutations = {
        setSelected(state, selected) {
            state.selected = selected
        },
    }
    const actions = {

    }

    export default {
        state,
        getters,
        actions,
        mutations
    }