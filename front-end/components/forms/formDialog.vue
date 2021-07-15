<template>
  <v-dialog
    v-if="isPageSchemaLoaded"
    v-model="isOpen"
    persistent
    overlay-opacity="0"
    width="800"
  >
    <v-card>
      <v-card-title class="card__title exo">
        {{ handlerTitle }}
      </v-card-title>
      <form-constructor :form-fields="pageSchema.form" />
      <v-divider />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red accent-4"
          text
          rounded
          depressed
          outlined
          @click="cancel"
        >
          Sair
        </v-btn>
        <v-btn color="success" text rounded depressed outlined @click="cancel">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import formConstructor from '../forms/formConstructor.vue'
export default {
  components: { formConstructor },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isPageSchemaLoaded: false,
    }
  },
  computed: {
    ...mapGetters(['pageSchema']),
    handlerTitle() {
      return this.method === 'create'
        ? `Adicione um ${this.pageSchema.name}`
        : `Atualize o ${this.pageSchema.name}`
    },
  },
  watch: {
    pageSchema: {
      deep: true,
      handler() {
        this.isPageSchemaLoaded = true
      },
    },
  },
  methods: {
    cancel() {
      this.$emit('update:isOpen', false)
    },
  },
}
</script>

<style scoped>
.card__title {
  font-size: 30px !important;
  font-weight: bold !important;
}
</style>
