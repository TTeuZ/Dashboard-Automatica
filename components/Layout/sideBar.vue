<template>
  <v-navigation-drawer
    v-model="openSideBar"
    app
    :expand-on-hover="!isMobile"
    :mini-variant.sync="mini"
    color="white"
    overlay-opacity="0"
  >
    <v-list class="pa-0">
      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in sideItems"
          :key="i"
          exact
          active-class="pageSelected"
          :to="{ path: item.path, query: item.query }"
        >
          <div v-if="item.icon !== 'home'" class="d-flex">
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content class="poppins">
              <v-list-item-title class="sidebar__text" v-text="item.text" />
            </v-list-item-content>
          </div>
          <div v-else class="d-flex">
            <v-list-item-icon>
              <img
                :src="require('@/static/K.png')"
                alt="Logo do sistema"
                class="logo__png"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <img
                :src="require('@/static/Kt.png')"
                alt="Logo do sistema"
                class="title__png"
              />
            </v-list-item-content>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { sizeDetector } from '../../mixins/windowSizeDetector'
export default {
  mixins: [sizeDetector],
  data() {
    return {
      openSideBar: true,
      mini: true,
    }
  },
  computed: {
    ...mapGetters(['sideItems']),
  },
  mounted() {
    this.getSideItems()
  },
  methods: {
    ...mapActions(['getSideItems']),
    changeStateOfSideBar() {
      this.openSideBar = true
    },
  },
}
</script>

<style script>
.pageSelected {
  background: -webkit-linear-gradient(
    bottom,
    rgba(86, 92, 219, 100) 0%,
    rgba(86, 92, 219, 100) 5%,
    rgba(0, 0, 0, 0) 6%,
    rgba(0, 0, 0, 0) 100%
  );
}
.logo__png {
  width: 24px !important;
  height: 24px !important;
}
.title__png {
  height: 24px !important;
}
.sidebar__text {
  font-size: 15px !important;
}
</style>
