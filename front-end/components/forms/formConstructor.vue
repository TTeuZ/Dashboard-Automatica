<template>
  <v-form ref="form" class="justify__content pt-4" lazy-validation>
    <component
      :is="field.type"
      v-for="(field, f) in formFields"
      :key="f"
      class="component__wrapper"
      :component="field"
    />
  </v-form>
</template>

<script>
import upload from '~/components/forms/fields/upload'
import inputArea from '~/components/forms/fields/inputArea'
import vSelect from '~/components/forms/fields/select'
import textInput from '~/components/forms/fields/input'
export default {
  components: { upload, inputArea, vSelect, textInput },
  props: {
    formFields: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clearForm() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style scoped>
.justify__content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.component__wrapper {
  width: 90%;
}
</style>
