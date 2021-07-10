<template>
  <v-app-bar class="app-bar" app color="white">
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mdAndDown"
      @click="$emit('changeStateOfSideBar')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  openSideBar: {
    required: true,
    type: Boolean,
  },
  computed: {
    ...mapGetters(['pageSchema']),
    pageTitle() {
      return this.pageSchema.title
    },
  },
}
</script>

<style scoped>
.app-bar.v-toolbar.v-app-bar {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
}
</style>
