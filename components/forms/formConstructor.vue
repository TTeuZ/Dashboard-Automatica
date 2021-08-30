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
import fields from '~/components/forms/fields/index'
export default {
  components: { ...fields },
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
