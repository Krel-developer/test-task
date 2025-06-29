<script lang="ts" setup>
interface Props {
  title: string
  isActive?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="card block_border"
    :class="{
      active: isActive,
    }"
  >
    <h3>{{ props.title }}</h3>
  </div>
</template>

<style scoped lang="sass">
.card
  aspect-ratio: 1/1
  display: flex
  align-items: center
  justify-content: center
  border: 1px solid #111
  padding: 5px
  border-radius: 5px
  cursor: pointer
  &.active
    border: 1px solid purple
    background: purple
    color: #fff
</style>
