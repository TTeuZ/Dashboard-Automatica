import { mapGetters } from 'vuex'
export const isLogged = {
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  beforeCreate() {
    // Middleware de verificação de esta logado

    if (this.isAuthenticated) {
      this.$router.push('/login')
    } else {
      this.$router.push('/')
    }
  },
}
