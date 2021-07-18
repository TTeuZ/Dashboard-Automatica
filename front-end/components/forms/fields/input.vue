<template>
  <v-text-field
    v-model="inputData"
    v-maska="component.mask"
    :label="component.label"
    rounded
    outlined
    dense
    flat
    solo
    validate-on-blur
    :rules="component.rules"
    @blur="sendValue(component.key)"
  />
</template>

<script>
import { form } from '~/mixins/forms'
export default {
  mixins: [form],
  props: {
    component: {
      type: Object,
      Required: true,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>
