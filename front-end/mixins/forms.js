export const form = {
  data() {
    return {
      inputData: null,
      checkboxData: [],
    }
  },
  methods: {
    sendValue(key) {
      this.$store.dispatch('setValue', { formKey: key, value: this.inputData })
    },
  },
}
