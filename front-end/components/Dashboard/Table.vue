<template>
  <v-container>
    <v-data-table
      :headers="tableHeaders"
      :items="values"
      :search="search"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
}
</script>

<style scoped></style>
