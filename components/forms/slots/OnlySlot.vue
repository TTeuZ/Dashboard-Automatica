<template>
  <div>
    <span>{{ getSlotInfo(slotData) }}</span>
  </div>
</template>

<script>
import { database } from '~/store/api/firebase'
export default {
  props: {
    slotData: {
      type: [Number, String, Array, Object],
      required: true,
    },
    slotConfig: {
      type: Object,
      Required: true,
      default: () => {},
    },
  },
  data() {
    return {
      externalCorrectlyData: [],
    }
  },
  methods: {
    getSlotInfo(data) {
      if (this.slotConfig.externalFont) {
        this.getExternaData(this.slotConfig.externalEntity)
        return this.externalCorrectlyData
      } else {
        return data
      }
    },
    async getExternaData(entity) {
      await database.child(entity).on('value', (snap) => {
        this.getValues(snap.val())
      })
    },
    getValues(entityData) {
      for (const item in entityData) {
        if (item === this.slotData)
          this.externalCorrectlyData =
            entityData[item][this.slotConfig.externalLabel]
      }
    },
  },
}
</script>

<style></style>
