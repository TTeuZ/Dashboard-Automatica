<template>
  <v-container fluid>
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="header">
        <span>{{ pageSchema.title }}</span>
        <span>{{ tableData }}</span>
      </v-col>
      <v-col cols="12">
        <!-- <vTable v-if="!isLoading" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
// import vTable from '~/components/Table.vue'
export default {
  // components: { vTable },
  computed: {
    ...mapGetters(['tableData', 'isLoading', 'pageSchema']),
    entity() {
      return this.$route.query.entity
    },
  },
  watch: {
    entity(newValue) {
      // this.setTableData()
      console.log(newValue)
      this.SET_PAGE_SCHEMA(newValue)
    },
  },
  mounted() {
    if (this.entity) {
      this.SET_PAGE_SCHEMA(this.entity)
    }
  },
  methods: {
    ...mapMutations(['SET_TABLE_DATA', 'SET_LOADING', 'SET_PAGE_SCHEMA']),
    ...mapActions(['setTableData']),
  },
}
</script>

<style scoped></style>
