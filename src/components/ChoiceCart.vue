<script lang="ts" setup>
defineProps<{
  activeItem: string | null
}>()
</script>

<template>
  <div class="choise_cart">
    <h3>{{ activeItem ? activeItem : 'Предмет не выбран' }}</h3>
  </div>
</template>

<style scoped lang="sass">
.choise_cart
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
</style>
