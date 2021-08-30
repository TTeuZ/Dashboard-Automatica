<template>
  <v-file-input
    v-model="inputData"
    :label="component.label"
    :accept="component.extension"
    :rules="component.rules"
    :multiple="component.multiple"
    dense
    show-size
    counter
    chips
    outlined
    rounded
    required
    clearable
    @blur="sendValue(component.key)"
  >
    <template v-slot:selection="{ text }">
      <v-chip small label :color="component.colorChip">
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>
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
