import Vue from 'vue'
import Vuex from 'vuex'
import page from './page'
import form from './form'
import table from './table'

Vue.use(Vuex)

export default {
  modules: {
    page,
    form,
    table,
  },
}
