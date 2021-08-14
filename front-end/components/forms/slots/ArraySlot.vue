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
        return this.getText(this.externalCorrectlyData)
      } else {
        return this.getText(data)
      }
    },
    async getExternaData(entity) {
      await database.child(entity).on('value', (snap) => {
        this.getValues(snap.val())
      })
    },
    getValues(entityData) {
      const pushedData = []
      this.slotData.forEach((data) => {
        for (const item in entityData) {
          if (item === data)
            pushedData.push(entityData[item][this.slotConfig.externalLabel])
        }
      })
      this.externalCorrectlyData = pushedData
    },
    getText(data) {
      let text = ''
      Array.isArray(data)
        ? data.forEach((item, index) => {
            text += index < data.length - 1 ? item + ', ' : item
          })
        : (text = data)
      return text
    },
  },
}
</script>

<style></style>
