import Vue from 'vue'
import Vuex from 'vuex'
import Api from './Api/entity'
import Central from './GlobalStore/central'
import Schema from './GlobalStore/schema'

Vue.use(Vuex)

export default {
  modules: {
    Api,
    Central,
    Schema,
  },
}
