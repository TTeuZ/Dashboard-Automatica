<template>
  <v-textarea
    v-model="inputData"
    :label="component.label"
    rounded
    outlined
    flat
    solo
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
