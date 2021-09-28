<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      min-width="100px"
      :close-on-content-click="false"
      :return-value.sync="inputData"
      transition="scale-transition"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="inputData"
          :label="component.label"
          :rules="component.rules"
          prepend-icon="mdi-calendar"
          rounded
          outlined
          dense
          flat
          solo
          clearable
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        :range="component.range"
        :header-color="component.pickerColor"
        :color="component.pickerColor"
        class="date-picker__wrapper"
      />
    </v-menu>
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
  data() {
    return {
      menu: false,
      date: null,
    }
  },
  watch: {
    date: {
      handler(newValue) {
        if (!newValue || newValue.length === 0) return null
        if (Array.isArray(newValue)) {
          if (newValue.length === 2) {
            newValue.forEach((item, i) => {
              newValue[i] = this.formatDate(item)
            })
            this.sendDataValue(newValue)
          }
        } else {
          this.sendDataValue(this.formatDate(newValue))
        }
      },
    },
  },
  mounted() {
    this.component.range ? (this.date = []) : (this.date = null)
  },
  methods: {
    formatDate(date) {
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    sendDataValue(value) {
      this.inputData = value
      this.$refs.menu.save(this.inputData)
      this.sendValue(this.component.key)
    },
  },
}
</script>
