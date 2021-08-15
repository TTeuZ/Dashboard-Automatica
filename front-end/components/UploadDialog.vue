<template>
  <v-dialog v-model="isOpen" width="500" persistent>
    <v-card>
      <v-card-title>
        Adicione arquivos
      </v-card-title>
      <v-card-text class="mt-3 pb-0">
        <v-form ref="form">
          <v-file-input
            v-model="files"
            :label="config.label"
            :accept="config.extension"
            :rules="config.rules"
            :multiple="config.multiple"
            dense
            show-size
            counter
            chips
            outlined
            rounded
            required
            clearable
          >
            <template v-slot:selection="{ text }">
              <v-chip small label :color="config.colorChip">
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="red accent-4" text rounded depressed small @click="close">
          cancelar
        </v-btn>
        <v-btn color="success" text rounded depressed small @click="sendValues">
          Adicionar
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
    config: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      files: null,
    }
  },
  methods: {
    close() {
      this.files = []
      this.$emit('update:isOpen', false)
    },
    sendValues() {
      if (this.$refs.form.validate()) {
        this.$emit('sendFiles', this.files)
      }
    },
  },
}
</script>

<style></style>
