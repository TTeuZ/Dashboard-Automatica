<template>
  <v-container fluid>
    <v-data-table
      class="elevation-2"
      calculate-widths
      :items-per-page="pageSchema.table.itemsPerPage"
      :multi-sort="pageSchema.table.multiSort"
      :search="search"
      :headers="tableHeaders"
      :items="fixedTableData"
      :mobile-breakpoint="pageSchema.table.mobileBreakPoint"
      :no-data-text="pageSchema.table.noDataText"
      :no-results-text="pageSchema.table.noResultText"
      :dense="pageSchema.table.dense"
      :loading="isTableLoading"
      loading-text="Carregando items"
    >
      <template
        v-for="(cSlot, index) in pageSchema.table.headers"
        v-slot:[`item.${cSlot.value}`]="{ item }"
      >
        <span v-if="!cSlot.slot" :key="index">
          {{ item[cSlot.value] }}
        </span>
        <div v-else :key="index">
          <component
            :is="handlerSlot(cSlot.value)"
            :id="item.id"
            :slot-data="handlerSlotData(item[getCorrectValue(cSlot.value)])"
            :slot-config="cSlot"
          />
        </div>
      </template>
      <template v-slot:[`item.functions`]="{ item }">
        <v-icon
          class="function__icon"
          color="primary"
          medium
          @click="updateItem(item)"
        >
          mdi-square-edit-outline
        </v-icon>
        <v-icon
          class="function__icon"
          color="error"
          medium
          @click="deleteItem(item.id)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
import { database } from '~/store/api/firebase'
import slots from '~/components/forms/slots/index'
export default {
  components: { ...slots },
  props: {
    entity: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      fixedTableData: [],
      tableHeaders: [],
    }
  },
  computed: {
    ...mapGetters(['pageSchema', 'isTableLoading']),
  },
  watch: {
    entity: {
      handler() {
        this.getTableData()
        this.getTableHeaders()
      },
    },
  },
  async mounted() {
    await this.getTableData()
    await this.getTableHeaders()
  },
  methods: {
    ...mapMutations(['SET_TABLE_LOADING']),
    getTableData() {
      this.SET_TABLE_LOADING(true)
      database.child(this.entity).on('value', (snap) => {
        this.fixedTableData = []
        this.getCorrectTableData(snap.val())
      })
    },
    handlerSlot(slot) {
      return slot.split('-')[0] + 'Slot'
    },
    getCorrectTableData(items) {
      for (const item in items) {
        const correctItem = {
          id: item,
          ...items[item],
        }
        this.fixedTableData.push(correctItem)
      }
      this.SET_TABLE_LOADING(false)
    },
    getTableHeaders() {
      this.tableHeaders = cloneDeep(this.pageSchema.table.headers)
      this.tableHeaders.push({
        value: 'functions',
        slot: false,
        align: 'center',
        sortable: false,
      })
    },
    getCorrectValue(value) {
      return value.split('-')[1]
    },
    handlerSlotData(data) {
      return data === undefined ? [] : data
    },
    deleteItem(id) {
      this.$emit('onDelete', [id, this.pageSchema.table.headers])
    },
    updateItem(item) {
      this.$emit('onUpdate', item)
    },
  },
}
</script>

<style scoped>
.function__icon {
  cursor: pointer;
}
</style>
