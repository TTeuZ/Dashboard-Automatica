import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from './api/firebase'
import Auth from './api/auth'
import Modules from './modules'
import Schema from './schemas'

Vue.use(Vuex)

export default {
  modules: {
    Firebase,
    Auth,
    Modules,
    Schema,
  },
}
