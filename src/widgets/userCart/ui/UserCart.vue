<script lang="ts" setup>
import { useUserCartStore } from '@/entities/userCart'
import { Card } from '@/shared/ui'

const userCartStore = useUserCartStore()
</script>

<template>
  <div class="user_cart">
    <div v-if="userCartStore.getActvieItemsCount" class="user_cart__items">
      <Card
        v-for="item in userCartStore.getActiveItems"
        :key="item.id"
        :title="item.name"
        :is-active="false"
      />
    </div>
    <div v-else>Предметы не выбраны</div>

    <div class="user_cart__count">
      selected {{ userCartStore.getActvieItemsCount }} /
      {{ userCartStore.getMaxActiveItems }}
    </div>
  </div>
</template>

<style scoped lang="sass">

.user_cart__items
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 10px
.user_cart__count
  margin-top: 20px
</style>
