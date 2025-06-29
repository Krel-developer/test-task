<script lang="ts" setup>
import { ref } from 'vue'
import userItemsMock from '../__mock__/userItems.json'
import Card from './Card.vue'
import type { IItem } from '../types'

const userItems = ref(userItemsMock)

defineEmits<{
  selectUserItem: [item: IItem]
}>()
</script>

<template>
  <div class="user_items">
    <Card
      v-for="item in userItems"
      :key="item.id"
      :title="item.name"
      @click="$emit('selectUserItem', item)"
    />
  </div>
</template>

<style scoped lang="sass">
.user_items
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 10px
</style>
