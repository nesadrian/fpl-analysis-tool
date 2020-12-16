import { createStore } from "vuex";
import { getDataGeneral, getDataManagerGeneral, getDataManagerHistory, getDataFixtures } from './api'

export default createStore({
  state () {
    return {
      dataGeneral: undefined,
      dataManagerGeneral: undefined,
      dataManagerHistory: undefined,
      dataFixtures: undefined,
    }
  },
  actions: {
    async fetchDataGeneral (context) {
      const data = await getDataGeneral();
      context.commit('setDataGeneral', data)
    },
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
    setDataGeneral (state, data) {
      state.dataGeneral = data;
    },
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
    getDataGeneral (state) {
      return state.dataGeneral;
    },
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
