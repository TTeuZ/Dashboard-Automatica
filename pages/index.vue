<template>
  <v-app></v-app>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  mounted() {
    this.SET_PAGE_SCHEMA('home')
  },
  methods: {
    ...mapMutations(['SET_PAGE_SCHEMA']),
  },
}
</script>

<style scoped></style>
