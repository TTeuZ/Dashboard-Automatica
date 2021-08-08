const state = {
  tableData: {},
}

const getters = {
  tableData: (state) => state.tableData,
}

const mutations = {
  SET_TABLE_DATA: (state, payload) => {
    state.tableData = payload
  },
}

export default {
  state,
  getters,
  mutations,
}
