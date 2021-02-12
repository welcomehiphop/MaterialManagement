import api from "@/services/api";

const state = {
    stocks: [],

};

const getters = {
    getStocks: state => state.stocks,
};

const actions = {
    async fetchStocks({ commit }) {
        let data = []
        const result = await api.getFeRoom('%StockA%');
        const result2 = await api.getFeRoom('%StockB%');
        const result3 = await api.getFeRoom('%StockC%');
        const result4 = await api.getFeRoom('%StockD%');
        const result5 = await api.getFeRoom('%StockE%');
        data.push(result.data)
        data.push(result2.data)
        data.push(result3.data)
        data.push(result4.data)
        data.push(result5.data)
        commit('setStocks', data);
    },
}

const mutations = {
    setStocks: (state, stocks) => (state.stocks = stocks)
};

export default {
    state,
    getters,
    actions,
    mutations
};