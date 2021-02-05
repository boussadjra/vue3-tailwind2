import { ActionContext, createStore } from 'vuex';
interface State {
  count: number
}
export default createStore({
  state: {
    count: 0
  },
  mutations: {
    INC(state: State, val: number) {
      state.count = val
    }
  },
  actions: {
    inc({ commit }: ActionContext<State, State>, payload: number) {
      commit('INC', payload)
    }
  },
  modules: {
  }
})
