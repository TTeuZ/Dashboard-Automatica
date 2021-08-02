import schema from './schema'

const state = {
  tableData: {},
  isDataLoading: true,
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
  SET_SELECT_OPTIONS: (state, form) => {
    state.pageSchemaDefined.form[form.index].items = form.options
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
  setValue: ({ state, commit }, { formKey, value }) => {
    for (const item in state.pageSchemaDefined.form) {
      if (state.pageSchemaDefined.form[item].key === formKey) {
        commit('SET_INPUT_VALUE', { item, value })
      }
    }
  },
  handlerSelectOptions: ({ commit }, { items, label, index }) => {
    const options = []
    for (const item in items) {
      options.push({
        label: items[item][label],
        value: item,
      })
    }
    commit('SET_SELECT_OPTIONS', { index, options })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
