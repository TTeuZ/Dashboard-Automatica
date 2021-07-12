import schema from './schema'

const state = {
  tableData: {},
  isDataLoading: false,
  pageSchemaDefined: schema.modules.home,
  sideBarItems: {},
}

const getters = {
  tableData: (state) => state.tableData,
  isLoading: (state) => state.isDataLoading,
  pageSchema: (state) => state.pageSchemaDefined,
  sideItems: (state) => state.sideBarItems,
}

const mutations = {
  SET_TABLE_DATA: (state, payload) => {
    state.tableData = payload
  },
  SET_LOADING: (state, payload) => {
    state.isDataLoading = payload
  },
  SET_PAGE_SCHEMA: (state, payload) => {
    state.pageSchemaDefined = schema.modules[payload]
  },
  SET_SIDE_BAR_ITEMS: (state, items) => {
    state.sideBarItems = items
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
  getSideItems: ({ commit }) => {
    const items = []
    for (const item in schema.modules) {
      items.push(schema.modules[item].sideBarItem)
    }
    commit('SET_SIDE_BAR_ITEMS', items)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
