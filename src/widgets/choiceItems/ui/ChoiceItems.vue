<script lang="ts" setup>
import { useChoiceItemsStore } from '@/entities/choiceItems'
import { selectChoiceItem } from '@/features/selectChoiceItem'
import { Card } from '@/shared/ui'

const choiceItemsStore = useChoiceItemsStore()

choiceItemsStore.fetchList()
</script>

<template>
  <div v-if="!choiceItemsStore.getList.length">Предметы не загружены</div>
  <div class="choice_items" v-else>
    <Card
      v-for="item in choiceItemsStore.getList"
      :key="item.id"
      :title="item.name"
      @click="selectChoiceItem(item)"
    />
  </div>
</template>

<style scoped lang="sass">
.choice_items
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 10px
</style>
