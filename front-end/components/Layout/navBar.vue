<template>
  <v-app-bar class="app-bar" app short color="white">
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="$emit('changeStateOfSideBar')"
    ></v-app-bar-nav-icon>
    <div>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-breadcrumbs class="exo pa-0" :items="pageSchema.breadcrumbs" />
    </div>
    <v-spacer />
    <v-icon @click="signOut()">mdi-logout</v-icon>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  methods: {
    ...mapActions(['signOut']),
  },
}
</script>

<style scoped>
.app-bar.v-toolbar.v-app-bar {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
}
</style>
