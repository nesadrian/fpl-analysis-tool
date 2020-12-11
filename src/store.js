import { createStore } from "vuex";
//import { getDataManagerHistory } from '../api'
import { getDataManagerGeneral } from './api'

export default createStore({
  state () {
    return {
      dataManagerGeneral: 1,
      dataManagerHistory: undefined,
      dataFixtures: undefined,
    }
  },
  actions: {
    async fetchDataManagerGeneral (context) {
      const data = await getDataManagerGeneral();
      context.commit('setDataManagerGeneral', data)
    },
  },
  mutations: {
    setDataManagerGeneral (state, data) {
      state.dataManagerGeneral = data;
    }
  },
  getters: {
    getDataManagerGeneral (state) {
      return state.dataManagerGeneral;
    },
  }
});