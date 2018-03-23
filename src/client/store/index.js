import Vue from 'vue'
import VueX from 'vuex'

export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export const MUTATIONS = {
  UPDATE_COUNT: 'UPDATE_COUNT'
}

Vue.use(VueX)

const state = {
  count: 0
}

const actions = {
  [ACTIONS.INCREMENT]({ state, commit }){
    let count = state.count + 1;
    commit(MUTATIONS.UPDATE_COUNT, count)
  }
}

const mutations = {
  [MUTATIONS.UPDATE_COUNT](state, value){
    state.count = value;
  }
}

const getters = {
  
}

export const store = new VueX.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
})