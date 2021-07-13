<template>
  <v-container fluid>
    <v-data-table
      class="elevation-2"
      calculate-widths
      :items-per-page="pageSchema.table.itemsPerPage"
      :multi-sort="pageSchema.table.multiSort"
      :search="search"
      :headers="pageSchema.table.headers"
      :items="pageSchema.table.items"
      :mobile-breakpoint="pageSchema.table.mobileBreakPoint"
      :no-data-text="pageSchema.table.noDataText"
      :no-results-text="pageSchema.table.noResultText"
      :dense="pageSchema.table.dense"
    >
    </v-data-table>
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
