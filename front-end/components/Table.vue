<template>
  <v-container fluid>
    <v-data-table
      class="elevation-2"
      calculate-widths
      :items-per-page="pageSchema.table.itemsPerPage"
      :multi-sort="pageSchema.table.multiSort"
      :search="search"
      :headers="pageSchema.table.headers"
      :items="fixedTableData"
      :mobile-breakpoint="pageSchema.table.mobileBreakPoint"
      :no-data-text="pageSchema.table.noDataText"
      :no-results-text="pageSchema.table.noResultText"
      :dense="pageSchema.table.dense"
    >
      <template
        v-for="(cSlot, index) in pageSchema.table.headers"
        v-slot:[`item.${cSlot.value}`]="{ item }"
      >
        <span v-if="!cSlot.slot" :key="index"> {{ item[cSlot.value] }} </span>
        <div v-else :key="index">
          <component
            :is="handlerSlot(cSlot.value)"
            :id="item.id"
            :slot-data="item[getCorrectValue(cSlot.value)]"
            :slot-config="cSlot"
          />
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
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
    }
  },
  computed: {
    ...mapGetters(['pageSchema', 'tableData']),
  },
  watch: {
    entity: {
      handler() {
        this.getTableData()
      },
    },
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
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
    },
    getCorrectValue(value) {
      return value.split('-')[1]
    },
  },
}
</script>

<style scoped></style>
