export const sizeDetector = {
  data() {
    return {
      actualSize: 0,
      isMobileWindow: false,
    }
  },
  computed: {
    isMobile() {
      return this.isMobileWindow
    },
  },
  mounted() {
    window.addEventListener('resize', this.handlerSize)
    this.handlerSize()
  },
  methods: {
    handlerSize() {
      this.actualSize = window.innerWidth
      this.handlerMobileState()
    },
    handlerMobileState() {
      this.isMobileWindow = this.actualSize < 1264
    },
  },
}
