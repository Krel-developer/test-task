<script lang="ts" setup>
import { useChoiceItemsStore } from '@/entities/choiceItems'

const choiceItemsStore = useChoiceItemsStore()
</script>

<template>
  <div class="choice_cart">
    <h3>{{ choiceItemsStore.getCurentITemName }}</h3>
  </div>
</template>

<style scoped lang="sass">
.choice_cart
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
</style>
