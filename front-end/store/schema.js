import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const schemas = {
  service: {
    title: 'Serviços',
  },
  testimony: {
    title: 'Testemunhos',
  },
}

export default {
  schemas,
}
