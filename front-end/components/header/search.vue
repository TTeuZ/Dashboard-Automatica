<template>
  <v-text-field
    v-model="pageSchema.table.search"
    label="O que procura?"
    color="#FF6347"
    dense
    rounded
    hide-details
    outlined
    clearable
    append-icon="mdi-folder-search-outline"
  />
  <!-- trocar o v-model por uma mutation do vuex -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['pageSchema']),
  },
}
</script>

<style scoped></style>
