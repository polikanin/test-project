import { createStore } from 'vuex'

export default createStore({
  state: {
    rightItems: [],
    leftItems: [],
  },
  mutations: {
    setRightItems (state, items) {
      state.rightItems = items
    },
    setLeftItems (state, items) {
      state.leftItems = items
    },
  },
  actions: {
    setRightItems({ commit }, items) {
      commit('setRightItems', items);
    },
    setLeftItems({ commit }, items) {
      commit('setLeftItems', items);
    },
  }
})
