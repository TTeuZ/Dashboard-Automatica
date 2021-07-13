import Vue from 'vue'
import Vuex from 'vuex'
import home from './schemas/home'
import testimony from './schemas/testimony'
import service from './schemas/service'
import loading from './schemas/loading'

Vue.use(Vuex)

export default {
  modules: {
    home,
    testimony,
    service,
    loading,
  },
}
