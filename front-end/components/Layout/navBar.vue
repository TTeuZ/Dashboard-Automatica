<template>
  <v-app-bar class="app-bar" app short color="white">
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="$emit('changeStateOfSideBar')"
    ></v-app-bar-nav-icon>
    <div>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-breadcrumbs class="roboto pa-0" :items="pageSchema.breadcrumbs" />
    </div>
    <v-spacer />
    <div class="slide__left d-flex">
      <div class="text">
        <span class="mr-1 hidden"> Sair </span>
      </div>
      <v-icon class="icon" @click="signOut()">mdi-logout</v-icon>
    </div>
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

<style lang="scss" scoped>
.app-bar.v-toolbar.v-app-bar {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
}
.text {
  width: auto;
  overflow: hidden;
}
.hidden {
  display: none;
}
.slide__left:hover {
  .hidden {
    display: initial;
    animation: slide-left 0.5s;
  }
}
@keyframes slide-left {
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>
