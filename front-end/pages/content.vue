<template>
  <v-container fluid>
    <div v-if="!isPageLoading">
      <v-row class="pa-0 ma-0 header d-flex">
        <v-col cols="12" md="12" lg="6" class="d-flex align-center">
          <addBtn v-if="pageSchema.showAdd"
        /></v-col>
        <v-col cols="12" md="12" lg="6" class="d-flex align-center">
          <search v-if="pageSchema.showSearch" @change="sendSearch($event)" />
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0" no-gutters>
        <vtable ref="table" :entity="entity" />
      </v-row>
    </div>
    <div v-else>
      <self-building-square-spinner />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import SelfBuildingSquareSpinner from '../components/Layout/SelfBuildingSquareSpinner.vue'
import addBtn from '../components/header/addBtn.vue'
import search from '../components/header/search.vue'
import { database } from '~/store/api/firebase'
import vtable from '~/components/Table.vue'
export default {
  components: { SelfBuildingSquareSpinner, addBtn, search, vtable },
  data() {
    return {
      selectOptionsTrigger: false,
    }
  },
  computed: {
    ...mapGetters(['isPageLoading', 'pageSchema']),
    entity() {
      return this.$route.query.entity
    },
  },
  watch: {
    entity(newValue) {
      this.SET_PAGE_SCHEMA(newValue)
    },
    pageSchema: {
      handler() {
        this.selectOptionsTrigger = true
      },
    },
    selectOptionsTrigger: {
      handler() {
        if (this.selectOptionsTrigger) {
          this.pageSchema.form.forEach((field, index) => {
            if (field.type === 'vSelect') {
              if (field.dataCameFromOtside)
                this.getDataFromOutside(field, index)
            }
          })
        }
        this.selectOptionsTrigger = false
        this.SET_PAGE_LOADING(false)
      },
    },
  },
  mounted() {
    if (this.entity) {
      this.SET_PAGE_SCHEMA(this.entity)
    }
  },
  methods: {
    ...mapMutations(['SET_PAGE_SCHEMA', 'SET_PAGE_LOADING']),
    sendSearch(search) {
      this.$refs.table.search = search
    },
    async getDataFromOutside(field, index) {
      await database.child(field.dataFont).on('value', (snap) => {
        this.$store.dispatch('handlerSelectOptions', {
          items: snap.val(),
          label: field.dataLabel,
          index,
        })
      })
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
