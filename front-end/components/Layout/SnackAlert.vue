<template>
  <v-snackbar
    v-model="showSnackBar"
    top
    right
    fixed
    :color="snackbarColor"
    transition="scroll-y-transition"
    timeout="3000"
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showSnackBar: false,
      snackbarColor: '',
      message: '',
    }
  },
  computed: {
    ...mapGetters(['alertData']),
  },
  watch: {
    alertData: {
      deep: true,
      handler(newValue) {
        this.showSnack(newValue)
      },
    },
  },
  methods: {
    showSnack(message) {
      this.showSnackBar = true
      this.snackbarColor = message.color
      this.message = message.text
    },
  },
}
</script>

<style scoped></style>
