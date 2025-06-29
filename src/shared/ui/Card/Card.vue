<script lang="ts" setup>
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="card block_border">
    <h3>{{ props.title }}</h3>
  </div>
</template>

<style scoped lang="sass">
.card
  aspect-ratio: 1/1
  display: flex
  align-items: center
  justify-content: space-between
  &.active
    border: 1px solid purple
</style>
