import Vue from 'vue'
import Vuex from 'vuex'
import page from './page'
import form from './form'

Vue.use(Vuex)

export default {
  modules: {
    page,
    form,
  },
}
