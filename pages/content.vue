<template>
  <v-container fluid>
    <form-dialog :is-open.sync="formDialog" :edit-item="itemInfo" />
    <delete-dialog
      ref="deleteDialog"
      :is-open.sync="deleteDialog"
      :message="message"
      @delete="deleteEntityItem()"
    />
    <div v-if="!isPageLoading">
      <v-row class="pa-0 ma-0 header d-flex">
        <v-col cols="12" md="12" lg="6" class="d-flex align-center">
          <addBtn v-if="pageSchema.showAdd" @click="openAdd()" />
        </v-col>
        <v-col cols="12" md="12" lg="6" class="d-flex align-center">
          <search v-if="pageSchema.showSearch" @change="sendSearch($event)" />
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0" no-gutters>
        <vtable
          ref="table"
          :entity="entity"
          @onDelete="openDeleteDialog($event)"
          @onUpdate="openEdit($event)"
        />
      </v-row>
      <git-hub-link />
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
import formDialog from '~/components/forms/formDialog'
import DeleteDialog from '~/components/DeleteDialog'
import vtable from '~/components/Table.vue'
import GitHubLink from '~/components/GitHubLink'
import { database, storage } from '~/store/api/firebase'
export default {
  components: {
    SelfBuildingSquareSpinner,
    addBtn,
    search,
    vtable,
    DeleteDialog,
    formDialog,
    GitHubLink,
  },
  data() {
    return {
      selectOptionsTrigger: false,
      deleteDialog: false,
      formDialog: false,
      itemInfo: null,
      message: '',
      method: '',
    }
  },
  computed: {
    ...mapGetters(['isPageLoading', 'pageSchema', 'pageEntity']),
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
    ...mapMutations([
      'SET_PAGE_SCHEMA',
      'SET_PAGE_LOADING',
      'SET_FORM_METHOD',
      'SET_ALERT_DATA',
    ]),
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
    openDeleteDialog(info) {
      this.itemInfo = info
      this.message = `Realmente deseja deletar esse ${this.pageSchema.title}`
      this.deleteDialog = true
    },
    openAdd() {
      this.SET_FORM_METHOD('create')
      this.formDialog = true
    },
    openEdit(item) {
      this.itemInfo = item
      this.SET_FORM_METHOD('update')
      this.formDialog = true
    },
    deleteEntityItem() {
      const hasFiles = this.itemInfo[1].some((item) => {
        return item.value.includes('file')
      })
      database
        .child(`${this.pageEntity}/${this.itemInfo[0]}`)
        .set(null)
        .then(() => {
          if (hasFiles) {
            storage
              .child(`${this.pageEntity}/${this.itemInfo[0]}`)
              .listAll()
              .then((res) => {
                const promises = res.items.map((item) => {
                  return item.delete()
                })
                Promise.all(promises)
                this.SET_ALERT_DATA({
                  text: this.pageSchema.title + ' foi deletado com sucesso!',
                  color: 'green',
                })
                this.deleteDialog = false
                this.$refs.deleteDialog.loading = false
              })
          }
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
