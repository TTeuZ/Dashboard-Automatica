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
    pageSearch() {
      return 'ok' // verificar pq aqui ele esta dando undefined para pageSchema.table.search
    },
  },
  watch: {
    pageSearch: {
      handler(newValue) {
        this.search = newValue
      },
    },
  },
  mounted() {
    this.search = this.pageSearch
  },
}
</script>

<style scoped></style>
