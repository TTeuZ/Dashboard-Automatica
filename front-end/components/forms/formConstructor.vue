<template>
  <v-row no-gutters>
    <v-col
      v-for="(field, f) in formFields"
      :key="f"
      cols="12"
      class="py-1 px-0 component__wrapper"
    >
      <component
        :is="field.component.type"
        v-model="field.value"
        :component-config="field.component.componentConfig"
      />
    </v-col>
  </v-row>
</template>

<script>
import upload from '~/components/forms/fields/upload'
import inputArea from '~/components/forms/fields/inputArea'
import select from '~/components/forms/fields/select'
import combobox from '~/components/forms/fields/combobox'
import textInput from '~/components/forms/fields/input'
export default {
  components: { upload, inputArea, select, combobox, textInput },
  props: {
    formFields: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.component__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
