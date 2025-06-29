<script lang="ts" setup>
import type { IUserData } from '../types'
import Card from './Card.vue'

interface IProps {
  userData: IUserData
}
defineProps<IProps>()
</script>

<template>
  <div class="user_cart">
    <div v-if="userData.actvieItemsCount" class="user_cart__items">
      <Card
        v-for="item in userData.list"
        :key="item.id"
        :title="item.name"
        :is-active="false"
      />
    </div>
    <div v-else>Предметы не выбраны</div>

    <div class="user_cart__count">
      selected {{ userData.actvieItemsCount }} /
      {{ userData.maxActiveItems }}
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
