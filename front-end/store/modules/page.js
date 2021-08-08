import schema from '../schemas'

const state = {
  isDataLoading: true,
  pageSchemaDefined: schema.modules.loading,
  sideBarItems: {},
}

const getters = {
  isLoading: (state) => state.isDataLoading,
  pageSchema: (state) => state.pageSchemaDefined,
  sideItems: (state) => state.sideBarItems,
}

const mutations = {
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
