<template>
  <v-dialog v-model="isOpen" width="300" persistent>
    <v-card>
      <v-card-title>
        Excluir
      </v-card-title>
      <v-card-text>
        <div v-if="!loading">
          {{ message }}
        </div>
        <div v-else class="py-6">
          <self-building-square-spinner />
        </div>
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
          @click="onDelete"
        >
          Deletar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SelfBuildingSquareSpinner from '../components/Layout/SelfBuildingSquareSpinner.vue'
export default {
  components: { SelfBuildingSquareSpinner },
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
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    onDelete() {
      this.loading = true
      this.$emit('delete')
    },
  },
}
</script>

<style scoped></style>
