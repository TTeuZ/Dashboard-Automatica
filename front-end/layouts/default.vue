<template>
  <v-app>
    <side-bar ref="sidebar" />
    <nav-bar @changeStateOfSideBar="changeStateOfSideBar()" />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import sideBar from '../components/Layout/sideBar.vue'
import navBar from '../components/Layout/navBar.vue'
import { isLogged } from '../mixins/isLoggedDetector'
export default {
  components: { sideBar, navBar },
  mixins: [isLogged],
  data: () => ({}),
  methods: {
    changeStateOfSideBar() {
      this.$refs.sidebar.changeStateOfSideBar()
    },
  },
}
</script>
