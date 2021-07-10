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
import sideBar from '../components/Dashboard/Layout/sideBar.vue'
import navBar from '../components/Dashboard/Layout/navBar.vue'
export default {
  components: { sideBar, navBar },
  data: () => ({}),
  methods: {
    changeStateOfSideBar() {
      this.$refs.sidebar.changeStateOfSideBar()
    },
  },
  head() {
    return {
      title: 'Dashboard',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página para controlar o projeto base',
        },
      ],
    }
  },
}
</script>
