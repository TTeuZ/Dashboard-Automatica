import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import loading from './loading'
import pageTeste from './pageTeste'
import testimony from './testimony'
import service from './service'
import projects from './projects'
import sections from './sections'

Vue.use(Vuex)

export default {
  modules: {
    home,
    loading,
    pageTeste,
    testimony,
    service,
    projects,
    sections,
  },
}
