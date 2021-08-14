<template>
  <v-switch
    v-model="switchData"
    :label="component.label"
    rounded
    class="pt-0 mt-0"
    @change="sendData()"
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
  methods: {
    sendData() {
      this.inputData = this.switchData
      this.sendValue(this.component.key)
    },
  },
}
</script>
