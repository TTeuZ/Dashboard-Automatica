import { mapGetters } from 'vuex'
export const isLogged = {
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    sendTo(path) {
      this.$router.push(path)
    },
  },
  created() {
    // Middleware de verificação de esta logado
    if (!this.isAuthenticated) {
      this.sendTo('/login')
    } else {
      this.sendTo('/')
    }
  },
  watch: {
    isAuthenticated: {
      handler(newValue) {
        if (newValue === false) {
          this.sendTo('/login')
        }
      },
    },
  },
}
