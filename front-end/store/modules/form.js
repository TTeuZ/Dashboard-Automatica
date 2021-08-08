import page from './page'

const state = page.state

const mutations = {
  SET_INPUT_VALUE: (state, form) => {
    state.pageSchemaDefined.form[form.item].value = form.value
  },
  SET_SELECT_OPTIONS: (state, form) => {
    state.pageSchemaDefined.form[form.index].items = form.options
  },
}

const actions = {
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
  mutations,
  actions,
}
