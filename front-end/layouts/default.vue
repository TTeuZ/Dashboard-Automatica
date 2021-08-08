<template>
  <v-app>
    <snack-alert />
    <side-bar ref="sidebar" />
    <nav-bar @changeStateOfSideBar="changeStateOfSideBar()" />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { isLogged } from '../mixins/isLoggedDetector'
import sideBar from '~/components/Layout/sideBar.vue'
import navBar from '~/components/Layout/navBar.vue'
import SnackAlert from '~/components/Layout/SnackAlert'
export default {
  components: { sideBar, navBar, SnackAlert },
  mixins: [isLogged],
  data: () => ({}),
  methods: {
    changeStateOfSideBar() {
      this.$refs.sidebar.changeStateOfSideBar()
    },
  },
}
</script>
