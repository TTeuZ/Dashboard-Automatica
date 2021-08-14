<template>
  <!-- <v-radio-group
    v-model="inputData"
    class="pt-0 mt-0"
    row
    @change="sendValue(component.key)"
  >
    <v-radio
      v-for="(item, i) in component.items"
      :key="i"
      :color="component.color"
      :label="item.label"
      :value="item.value"
    ></v-radio>
  </v-radio-group> -->
  <div class="d-flex">
    <v-checkbox
      v-for="(item, i) in component.items"
      :key="i"
      v-model="checkboxData"
      class="mt-0 pt-0 pr-3"
      :color="item.color"
      :label="item.label"
      :value="item.value"
      @change="sendData()"
    ></v-checkbox>
  </div>
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
      this.inputData = this.checkboxData
      this.sendValue(this.component.key)
    },
  },
}
</script>
