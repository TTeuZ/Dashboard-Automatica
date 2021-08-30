import { mapGetters } from 'vuex'

export const form = {
  computed: {
    ...mapGetters(['formMethod']),
  },
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
    fillValues() {
      if (this.formMethod === 'update') {
        switch (this.component.type) {
          case 'checkbox':
            this.checkboxData = this.component.value
            break
          case 'radio':
            this.radioData = this.component.value
            break
          case 'switchField':
            this.switchData = this.component.value
            break
          default:
            this.inputData = this.component.value
        }
      }
    },
  },
  mounted() {
    this.fillValues()
  },
  watch: {
    formMethod: {
      handler() {
        this.fillValues()
      },
    },
  },
}
