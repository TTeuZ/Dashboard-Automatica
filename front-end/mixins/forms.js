export const form = {
  data() {
    return {
      inputData: null,
      checkboxData: [],
      radioData: null,
      switchData: null,
    }
  },
  methods: {
    sendValue(key) {
      this.$store.dispatch('setValue', { formKey: key, value: this.inputData })
    },
  },
}
