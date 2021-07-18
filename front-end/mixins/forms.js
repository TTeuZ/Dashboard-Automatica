export const form = {
  data() {
    return {
      inputData: '',
    }
  },
  methods: {
    sendValue(key) {
      this.$store.dispatch('setValue', { formKey: key, value: this.inputData })
    },
  },
}
