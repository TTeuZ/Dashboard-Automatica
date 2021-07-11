<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
import { isLogged } from '../mixins/isLoggedDetector'
export default {
  name: 'Login', // Para resolver o warn de invalid-name
  mixins: [isLogged],
}
</script>

<style scoped></style>
