import cloneDeep from 'lodash/cloneDeep'
import { auth } from './firebase'

const state = {
  user: {},
}

const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return !!state.user
  },
}

const mutations = {
  setUser: (state, payload) => {
    state.user = cloneDeep(payload)
  },
}

const actions = {
  signUp({ commit }, { email, password }) {
    return auth.createUserWithEmailAndPassword(email, password)
  },
  signInWithEmail({ commit }, { email, password }) {
    return auth.signInWithEmailAndPassword(email, password)
  },
  signOut() {
    return auth.signOut()
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
