<template>
  <v-container fluid>
    <v-row class="pa-0 ma-0 header d-flex">
      <v-col cols="12" md="12" lg="6" class="d-flex align-center">
        <addBtn v-if="pageSchema.showAdd"
      /></v-col>
      <v-col cols="12" md="12" lg="6" class="d-flex align-center">
        <search v-if="pageSchema.showSearch" @change="sendSearch($event)" />
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0" no-gutters>
      <vtable ref="table" />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import addBtn from '../components/header/addBtn.vue'
import search from '../components/header/search.vue'
import vtable from '~/components/Table.vue'
export default {
  components: { addBtn, search, vtable },
  computed: {
    ...mapGetters(['isLoading', 'pageSchema']),
    entity() {
      return this.$route.query.entity
    },
  },
  watch: {
    entity(newValue) {
      this.SET_PAGE_SCHEMA(newValue)
    },
  },
  mounted() {
    if (this.entity) {
      this.SET_PAGE_SCHEMA(this.entity)
    }
  },
  methods: {
    ...mapMutations(['SET_PAGE_SCHEMA']),
    sendSearch(search) {
      this.$refs.table.search = search
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 1265px) {
  .header {
    flex-direction: column-reverse;
  }
}
</style>
