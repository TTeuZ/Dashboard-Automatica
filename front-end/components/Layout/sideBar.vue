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
          v-for="(item, i) in items"
          :key="i"
          exact
          active-class="pageSelected"
          :to="{ path: item.path, query: item.query }"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content class="exo">
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { sizeDetector } from '../../mixins/windowSizeDetector'
export default {
  mixins: [sizeDetector],
  data() {
    return {
      openSideBar: true,
      mini: true,
      items: [
        {
          icon: 'mdi-check',
          text: 'Home',
          path: '/',
        },
        {
          icon: 'mdi-check',
          text: 'Testemunhos',
          path: '/content',
          query: { entity: 'testimony' },
        },
        {
          icon: 'mdi-check',
          text: 'service',
          path: '/content',
          query: { entity: 'service' },
        },
      ],
    }
  },
  methods: {
    changeStateOfSideBar() {
      this.openSideBar = true
    },
  },
}
</script>

<style script>
.pageSelected {
  background: linear-gradient(
    90deg,
    rgba(16, 230, 158, 1) 0%,
    rgba(72, 242, 186, 1) 35%,
    rgba(151, 247, 215, 1) 100%
  );
}
</style>
