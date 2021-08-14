<template>
  <v-radio-group
    v-model="inputData"
    class="pt-0 mt-0"
    row
    :rules="component.rules"
    @change="sendValue(component.key)"
  >
    <v-radio
      v-for="(item, i) in component.items"
      :key="i"
      :color="component.color"
      :label="item.label"
      :value="item.value"
    ></v-radio>
  </v-radio-group>
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
