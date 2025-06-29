<script setup lang="ts">
import UserItems from './components/UserItems.vue'
import type { IItem } from './types'

function selectUserItem(item: IItem) {
  console.log(item)
}
</script>

<template>
  <div class="app__top">
    <div class="app__top__column block_border">UserCart</div>
    <div class="app__top__column block_border">ChoiseCart</div>
  </div>
  <div class="app__bottom">
    <div class="app__bottom__column block_border">
      <UserItems @select-user-item="selectUserItem" />
    </div>
    <div class="app__bottom__column block_border">ChoiseItems</div>
  </div>
</template>

<style lang="sass">
.app__top
  display: flex
  justify-content: space-between
  flex-wrap: wrap
.app__top__column

  width: 300px
  max-width: 100%
  margin-bottom: 30px

.app__bottom
  display: grid
  gap: 20px
  grid-template-columns: 1fr 1fr
</style>
