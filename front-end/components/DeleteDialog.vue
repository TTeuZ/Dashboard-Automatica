<template>
  <v-dialog v-model="isOpen" width="300" persistent>
    <v-card>
      <v-card-title>
        Excluir
      </v-card-title>
      <v-card-text>
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          rounded
          depressed
          small
          @click="$emit('update:isOpen', false)"
        >
          Cancelar
        </v-btn>
        <v-btn
          color="red accent-4"
          text
          rounded
          depressed
          small
          @click="$emit('delete')"
        >
          Deletar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
