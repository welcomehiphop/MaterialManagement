import api from "@/services/api";

const state = {
    stocks: [],
    feSpares: []
};

const getters = {
    getStocks: state => state.stocks,
    getFeSpares: state => state.feSpares
};

const actions = {
    async fetchStocks({ commit }) {
        const result = await api.getFeRoom('%StockA%');
        commit('setStocks', result.data);
    },
    async fetchFeSpares({ commit }) {
        const result = await api.getFeSpare('%StockA%');
        commit('setFeSpares', result.data);
    },
}

const mutations = {
    setStocks: (state, stocks) => (state.stocks = stocks),
    setFeSpares: (state, feSpares) => (state.feSpares = feSpares),

}

export default {
    state,
    getters,
    actions,
    mutations
};