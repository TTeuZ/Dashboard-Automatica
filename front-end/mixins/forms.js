export const form = {
  data() {
    return {
      inputData: null,
      checkboxData: [],
      radiodata: null,
      swtichData: null,
    }
  },
  methods: {
    sendValue(key) {
      this.$store.dispatch('setValue', { formKey: key, value: this.inputData })
    },
  },
}
