<template>
  <v-select
    v-model="inputData"
    :label="component.label"
    :rules="component.rules"
    :multiple="component.isMultiple"
    :items="component.items"
    :item-value="component.items.value"
    item-text="label"
    dense
    rounded
    clearable
    small-chips
    outlined
    flat
    solo
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
  methods: {
    getDataFromOutside() {
      // fazer função que vai pegar data de rotas do firebase.
    },
  },
}
</script>

<style scoped></style>
