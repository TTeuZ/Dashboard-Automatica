import Vue from 'vue'
import Vuex from 'vuex'
import schema from '../store/schema'

Vue.use(Vuex)

const state = {
  tableData: {},
  isDataLoading: false,
  pageSchemaDefined: {},
}

const getters = {
  tableData: (state) => state.tableData,
  isLoading: (state) => state.isDataLoading,
  pageSchema: (state) => state.pageSchemaDefined,
}

const mutations = {
  SET_TABLE_DATA: (state, payload) => {
    state.tableData = payload
  },
  SET_LOADING: (state, payload) => {
    state.isDataLoading = payload
  },
  SET_PAGE_SCHEMA: (state, payload) => {
    state.pageSchemaDefined = schema.schemas[payload]
  },
}

const actions = {
  setTableData: async ({ commit, state }) => {
    // commit('SET_LOADING', true)
    // await this.$axios.get(state.entity).then((res) => {
    //   commit('SET_TABLE_DATA', res.data)
    //   commit('SET_LOADING', false)
    // })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
