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
      <form-constructor ref="constructor" :form-fields="pageSchema.form" />
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
        <v-btn
          color="success"
          text
          rounded
          depressed
          outlined
          @click="prepareToSave"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import formConstructor from '../forms/formConstructor.vue'
import { database } from '~/store/Api/firebase'
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
      this.$refs.constructor.clearForm()
      this.$emit('update:isOpen', false)
    },
    prepareToSave() {
      const values = {}
      if (this.$refs.constructor.$refs.form.validate()) {
        this.pageSchema.form.forEach((item) => {
          values[item.key] = item.value
        })
      }
      this.save(values)
    },
    save(data) {
      database
        .child(`${this.pageSchema.name}`)
        .push()
        .set(data)
        .then(() => {
          this.$refs.constructor.clearForm()
          this.$emit('update:isOpen', false)
        })
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
