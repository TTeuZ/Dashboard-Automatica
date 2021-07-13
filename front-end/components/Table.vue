<template>
  <v-container>
    <v-data-table calculate-widths :search="search"></v-data-table>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters(['pageSchema']),
  },
}
</script>

<style scoped></style>
