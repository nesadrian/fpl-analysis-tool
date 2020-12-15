import { createStore } from "vuex";
import { getDataManagerGeneral, getDataManagerHistory, getDataFixtures } from './api'

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
    async fetchDataFixtures (context) {
      const data = await getDataFixtures();
      context.commit('setDataFixtures', data);
    },
  },
  mutations: {
    setDataManagerGeneral (state, data) {
      state.dataManagerGeneral = data;
    },
    setDataManagerHistory (state, data) {
      state.dataManagerHistory = data;
    },
    setDataFixtures (state, data) {
      state.dataFixtures = data;
    },
  },
  getters: {
    getDataManagerGeneral (state) {
      return state.dataManagerGeneral;
    },
    getDataManagerHistory (state) {
      return state.dataManagerHistory;
    },
    getDataFixtures (state) {
      return state.dataFixtures;
    },
  }
});
