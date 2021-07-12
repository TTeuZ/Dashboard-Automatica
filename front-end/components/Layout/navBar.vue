<template>
  <v-app-bar class="app-bar" app color="white">
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="$emit('changeStateOfSideBar')"
    ></v-app-bar-nav-icon>
    <div>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-breadcrumbs class="exo pa-0" :items="pageSchema.breadcrumbs" />
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import { sizeDetector } from '../../mixins/windowSizeDetector'
export default {
  mixins: [sizeDetector],
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
