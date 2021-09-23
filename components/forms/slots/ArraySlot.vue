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
      if (data) {
        return this.slotConfig.externalFont
          ? this.getFullExternalData()
          : this.getText(data)
      } else {
        return []
      }
    },
    getFullExternalData() {
      this.getExternalData(this.slotConfig.externalEntity)
      return this.getText(this.externalCorrectlyData)
    },
    getExternalData(entity) {
      database.child(entity).on('value', (snap) => {
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
      data.forEach((item, index) => {
        text += index < data.length - 1 ? item + ', ' : item
      })
      return text
    },
  },
}
</script>

<style></style>
