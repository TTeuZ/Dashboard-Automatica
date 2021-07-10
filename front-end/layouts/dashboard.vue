<template>
  <v-app>
    <side-bar ref="sidebar" />
    <nav-bar @changeStateOfSideBar="changeStateOfSideBar()" />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import sideBar from '../components/Dashboard/Layout/sideBar.vue'
import navBar from '../components/Dashboard/Layout/navBar.vue'
export default {
  components: { sideBar, navBar },
  data: () => ({}),
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
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
