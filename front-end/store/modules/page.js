import schema from '../schemas'

const state = {
  isDataLoading: true,
  isTableLoading: null,
  formMethod: '',
  pageSchemaDefined: schema.modules.loading,
  sideBarItems: {},
  alertData: {},
}

const getters = {
  isPageLoading: (state) => state.isDataLoading,
  isTableLoading: (state) => state.isTableLoading,
  pageSchema: (state) => state.pageSchemaDefined,
  sideItems: (state) => state.sideBarItems,
  alertData: (state) => state.alertData,
  pageEntity: (state) => state.pageSchemaDefined.name,
}

const mutations = {
  SET_PAGE_LOADING: (state, payload) => {
    state.isDataLoading = payload
  },
  SET_TABLE_LOADING: (state, payload) => {
    state.isTableLoading = payload
  },
  SET_PAGE_SCHEMA: (state, payload) => {
    state.pageSchemaDefined = schema.modules[payload]
  },
  SET_SIDE_BAR_ITEMS: (state, items) => {
    state.sideBarItems = items
  },
  SET_ALERT_DATA: (state, data) => {
    state.alertData = data
  },
}

const actions = {
  getSideItems: ({ commit }) => {
    const items = []
    for (const item in schema.modules) {
      if (item !== 'loading') {
        items.push(schema.modules[item].sideBarItem)
      }
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
