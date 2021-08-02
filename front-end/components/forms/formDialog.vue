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
import { mapGetters, mapMutations } from 'vuex'
import formConstructor from '../forms/formConstructor.vue'
import { database, storage } from '~/store/Api/firebase'
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
      selectOptionsTrigger: false,
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
  watch: {
    pageSchema: {
      handler() {
        this.SET_LOADING(false)
        this.selectOptionsTrigger = true
      },
    },
    selectOptionsTrigger: {
      handler() {
        if (this.selectOptionsTrigger) {
          this.pageSchema.form.forEach((field, index) => {
            if (field.type === 'vSelect') {
              if (field.dataCameFromOtside)
                this.getDataFromOutside(field, index)
            }
          })
        }
        this.selectOptionsTrigger = false
      },
    },
  },
  methods: {
    ...mapMutations(['SET_LOADING']),
    cancel() {
      this.$refs.constructor.clearForm()
      this.$emit('update:isOpen', false)
    },
    getDataFromOutside(field, index) {
      database.child(field.dataFont).on('value', (snap) =>
        this.$store.dispatch('handlerSelectOptions', {
          items: snap.val(),
          label: field.dataLabel,
          index,
        })
      )
    },
    handlerUploadedFiles(item, id) {
      item.value.forEach((file) => {
        storage
          .child(`${file.name}`)
          .put(file)
          .then(() => {
            storage
              .child(`${file.name}`)
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
