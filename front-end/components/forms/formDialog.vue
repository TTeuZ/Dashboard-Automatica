<template>
  <v-dialog
    v-if="!isPageLoading"
    v-model="isOpen"
    persistent
    overlay-opacity="0"
    width="800"
  >
    <v-card>
      <v-card-title class="card__title poppins">
        {{ handlerTitle }}
      </v-card-title>
      <form-constructor
        v-if="!isPageLoading"
        ref="constructor"
        :form-fields="fields"
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
    editItem: {
      type: [Object, Array],
      default: () => {},
    },
  },
  data() {
    return {
      files: [],
      fields: [],
    }
  },
  computed: {
    ...mapGetters(['pageSchema', 'isPageLoading', 'formMethod']),
    handlerTitle() {
      return this.formMethod === 'create'
        ? `Adicione um ${this.pageSchema.title}`
        : `Atualize o ${this.pageSchema.title}`
    },
  },
  watch: {
    formMethod: {
      handler(newValue) {
        if (newValue === 'create') {
          this.fields = this.pageSchema.form
        } else if (newValue === 'update') {
          this.fields = this.pageSchema.form.filter((item) => {
            return item.type !== 'upload'
          })
          this.fillValues()
        }
      },
    },
  },
  methods: {
    ...mapMutations(['SET_ALERT_DATA', 'SET_FORM_METHOD']),
    cancel() {
      this.$refs.constructor.clearForm()
      this.SET_FORM_METHOD('')
      this.$emit('update:isOpen', false)
    },
    fillValues() {
      this.fields.forEach((field) => {
        this.$store.dispatch('setValue', {
          formKey: field.key,
          value: this.editItem[field.key],
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
            this.files.push(item)
          }
        })
        this.formMethod === 'create' ? this.save(values) : this.update(values)
      }
    },
    async handlerUploadedFiles(item, id) {
      await item.forEach((files) => {
        files.value.forEach((file) => {
          storage
            .child(`${this.pageSchema.name}/${id}/${file.name}`)
            .put(file)
            .then(() => {
              storage
                .child(`${this.pageSchema.name}/${id}/${file.name}`)
                .getDownloadURL()
                .then((res) => {
                  database
                    .child(`${this.pageSchema.name}/${id}/${files.key}`)
                    .push(res)
                })
            })
        })
      })
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
    update(data) {
      const fullData = Object.assign(this.editItem, data)
      database
        .child(`${this.pageSchema.name}/${this.editItem.id}`)
        .set(fullData)
        .then(() => {
          this.$refs.constructor.clearForm()
          this.SET_ALERT_DATA({
            text: this.pageSchema.title + ' foi editado com sucesso!',
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
