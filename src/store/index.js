import { createStore } from 'vuex'

export default createStore({
  state: {
    rightItems: false,
    leftItems: false,
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
    setRightItems (context, items) {
      context.commit('setRightItems', items)
    },
    setLeftItems (context, items) {
      context.commit('setLeftItems', items)
    },
  }
})
