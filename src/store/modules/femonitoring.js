import api from "@/services/api";

const state = {
    stocks: []
};

const getters = {
    getStocks: state => state.stocks
};

const actions = {
    async fetchStocks({ commit }) {
        const result = await api.getFeRoom();

        console.log(result)
        commit('setStocks', result.data);
    },

}

const mutations = {
    setStocks: (state, stocks) => (state.stocks = stocks),
};

export default {
    state,
    getters,
    actions,
    mutations
};