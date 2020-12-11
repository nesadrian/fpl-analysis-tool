import { createStore } from "vuex";
import { getDataManagerGeneral, getDataManagerHistory } from './api'

export default createStore({
  state () {
    return {
      dataManagerGeneral: undefined,
      dataManagerHistory: undefined,
      dataFixtures: undefined,
    }
  },
  actions: {
    async fetchDataManagerGeneral (context) {
      const data = await getDataManagerGeneral();
      context.commit('setDataManagerGeneral', data)
    },
    async fetchDataManagerHistory (context) {
      const data = await getDataManagerHistory();
      context.commit('setDataManagerHistory', data);
    },
  },
  mutations: {
    setDataManagerGeneral (state, data) {
      state.dataManagerGeneral = data;
    },
    setDataManagerHistory (state, data) {
      state.dataManagerHistory = data;
    },
    setDataManagerHistoryChart (state, data) {
      state.dataManagerHistoryChart = data;
    },
  },
  getters: {
    getDataManagerGeneral (state) {
      return state.dataManagerGeneral;
    },
    getDataManagerHistory (state) {
      return state.dataManagerHistory;
    },
  }
});
