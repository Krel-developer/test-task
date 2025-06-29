<script lang="ts" setup>
import { useUserItemsStore } from '@/entities/userItems'
import { selectUserItem } from '@/features/selectUserItem'
import { Card } from '@/shared/ui'

const userItemsStore = useUserItemsStore()
userItemsStore.fetchList()
</script>

<template>
  <div v-if="!userItemsStore.getList.length">Предметы не загружены</div>
  <div class="user_items" v-else>
    <Card
      v-for="item in userItemsStore.getList"
      :key="item.id"
      :title="item.name"
      :is-active="item.isActive"
      @click="selectUserItem(item)"
    />
  </div>
</template>

<style scoped lang="sass">
.user_items
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 10px
</style>
