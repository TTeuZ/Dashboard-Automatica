import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from './Api/firebase'
import Auth from './Api/auth'
import Central from './GlobalStore/central'
import Schema from './GlobalStore/schema'

Vue.use(Vuex)

export default {
  modules: {
    Firebase,
    Auth,
    Central,
    Schema,
  },
}
