<template>
  <v-dialog
    v-if="!isLoading"
    v-model="isOpen"
    persistent
    overlay-opacity="0"
    width="800"
  >
    <v-card>
      <v-card-title class="card__title exo">
        {{ handlerTitle }}
      </v-card-title>
      <form-constructor
        v-if="!isLoading"
        ref="constructor"
        :form-fields="pageSchema.form"
      />
      <v-divider />
      <v-card-actions>
        <v-spacer />
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
import { mapGetters, mapMutations } from 'vuex'
import formConstructor from '../forms/formConstructor.vue'
import { database, storage } from '~/store/api/firebase'
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
      files: null,
    }
  },
  computed: {
    ...mapGetters(['pageSchema', 'isLoading']),
    handlerTitle() {
      return this.method === 'create'
        ? `Adicione um ${this.pageSchema.title}`
        : `Atualize o ${this.pageSchema.title}`
    },
  },
  methods: {
    ...mapMutations(['SET_LOADING', 'SET_ALERT_DATA']),
    cancel() {
      this.$refs.constructor.clearForm()
      this.$emit('update:isOpen', false)
    },
    async handlerUploadedFiles(item, id) {
      await item.value.forEach((file) => {
        storage
          .child(`${this.pageSchema.name}/${id}/${file.name}`)
          .put(file)
          .then(() => {
            storage
              .child(`${this.pageSchema.name}/${id}/${file.name}`)
              .getDownloadURL()
              .then((res) => {
                database.child(`${this.pageSchema.name}/${id}/files`).push(res)
              })
          })
      })
    },
    prepareToSave() {
      const values = {}
      if (this.$refs.constructor.$refs.form.validate()) {
        this.pageSchema.form.forEach((item) => {
          if (item.type !== 'upload') {
            values[item.key] = item.value
          } else {
            this.files = item
          }
        })
        this.save(values)
      }
    },
    save(data) {
      database
        .child(`${this.pageSchema.name}`)
        .push(data)
        .then((res) => {
          if (this.files !== null) {
            this.handlerUploadedFiles(this.files, res.key)
          }
          this.$refs.constructor.clearForm()
          this.SET_ALERT_DATA({
            text: this.pageSchema.title + ' foi criado com sucesso!',
            color: 'green',
          })
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
