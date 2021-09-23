<template>
  <div class="d-flex">
    <v-checkbox
      v-for="(item, i) in component.items"
      :key="i"
      v-model="checkboxData"
      class="mt-0 pt-0 pr-3"
      :color="item.color"
      :label="item.label"
      :value="item.value"
      :rules="rules"
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
  computed: {
    rules() {
      return [
        this.checkboxData.length > 0 ||
          'Pelo menos 1 item deve ser selecionado',
      ]
    },
  },
  mounted() {
    this.sendData()
  },
  methods: {
    sendData() {
      this.inputData = this.checkboxData
      this.sendValue(this.component.key)
    },
  },
}
</script>
