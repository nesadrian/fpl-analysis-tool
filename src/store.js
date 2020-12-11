import { createStore } from "vuex";

export default createStore({
  state () {
    return {
      todos: 1
    }
  },
  mutations: {
    addTodo (state) {
      state.todos++;
    }
  },
  getters: {
    getTodos (state) {
      return state.todos;
    },
  }
});