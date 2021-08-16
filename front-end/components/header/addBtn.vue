<template>
  <v-btn
    color="success"
    text
    rounded
    depressed
    outlined
    @click="$emit('click')"
  >
    <v-icon> mdi-bookmark-plus-outline </v-icon> Adicionar
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      openDialog: false,
      method: 'create',
    }
  },
}
</script>

<style scoped></style>
