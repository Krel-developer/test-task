<script lang="ts" setup>
import Card from './Card.vue'
import userСhoiceMock from '../__mock__/choiсeItems.json'
import type { IItem } from '../types'

defineEmits<{ selectChoiceItem: [item: IItem] }>()
</script>

<template>
  <div class="choiсe_items">
    <Card
      v-for="item in userСhoiceMock"
      :key="item.id"
      :title="item.name"
      :is-active="false"
      @click="$emit('selectChoiceItem', item)"
    />
  </div>
</template>

<style scoped lang="sass">
.choiсe_items
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 10px
</style>
