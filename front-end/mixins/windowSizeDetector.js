export const sizeDetector = {
  data() {
    return {
      actualSize: 0,
      isMobile: false,
    }
  },
  computed: {
    isMobile() {
      return this.isMobile
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
      this.isMobile = this.actualSize < 1024
    },
  },
}
