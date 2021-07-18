import schema from './schema'

const state = {
  tableData: {},
  isDataLoading: false,
  pageSchemaDefined: schema.modules.loading,
  sideBarItems: {},
}

const getters = {
  tableData: (state) => state.tableData,
  isLoading: (state) => state.isDataLoading,
  pageSchema: (state) => state.pageSchemaDefined,
  sideItems: (state) => state.sideBarItems,
  pageFormSchema: (state) => state.pageSchemaDefined.form,
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
  SET_INPUT_VALUE: (state, form) => {
    state.pageSchemaDefined.form[form.item].value = form.value
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
      if (item !== 'loading') {
        items.push(schema.modules[item].sideBarItem)
      }
    }
    commit('SET_SIDE_BAR_ITEMS', items)
  },
  setValue: ({ state, commit }, { formKey, value }) => {
    for (const item in state.pageSchemaDefined.form) {
      if (state.pageSchemaDefined.form[item].key === formKey) {
        commit('SET_INPUT_VALUE', { item, value })
      }
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
