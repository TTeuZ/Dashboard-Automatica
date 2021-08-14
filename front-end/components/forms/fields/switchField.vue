<template>
  <v-switch
    v-model="inputData"
    :label="component.label"
    rounded
    class="pt-0 mt-0"
    @change="sendValue(component.key)"
  ></v-switch>
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
