<template>
  <div>
    <v-btn
      color="success"
      text
      rounded
      depressed
      outlined
      @click="openDialog = true"
    >
      <v-icon> mdi-bookmark-plus-outline </v-icon> Adicionar
    </v-btn>
    <form-dialog :is-open.sync="openDialog" :method="method" />
  </div>
</template>

<script>
import formDialog from '~/components/forms/formDialog'
export default {
  components: { formDialog },
  data() {
    return {
      openDialog: false,
      method: 'create',
    }
  },
}
</script>

<style scoped></style>
