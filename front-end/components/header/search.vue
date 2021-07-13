<template>
  <v-text-field
    v-model="search"
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
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters(['pageSchema']),
  },
  watch: {
    search: {
      handler(newValue) {
        this.$emit('change', newValue)
      },
    },
  },
}
</script>

<style scoped></style>
