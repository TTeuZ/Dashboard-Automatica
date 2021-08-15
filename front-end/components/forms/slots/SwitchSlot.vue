<template>
  <span>{{ slotData ? 'Sim' : 'Não' }}</span>
</template>

<script>
export default {
  props: {
    slotData: {
      type: [Number, String, Array, Object, Boolean],
      required: true,
    },
    slotConfig: {
      type: Object,
      Required: true,
      default: () => {},
    },
  },
}
</script>
