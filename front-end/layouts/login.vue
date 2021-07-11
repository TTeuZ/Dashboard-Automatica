<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
import { isLogged } from '../mixins/isLoggedDetector'
export default {
  mixins: [isLogged],
}
</script>

<style scoped></style>
