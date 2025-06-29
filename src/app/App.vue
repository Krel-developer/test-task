<script setup lang="ts">
import { BlockWithBorder } from '@/shared/ui'
import { UserCart } from '@/widgets/userCart'
import { UserItems } from '@/widgets/userItems'
</script>

<template>
  <div class="app__top">
    <BlockWithBorder class="app__top__column"> <UserCart /> </BlockWithBorder>
    <BlockWithBorder class="app__top__column"> ChoiseCart </BlockWithBorder>
  </div>
  <div class="app__bottom">
    <BlockWithBorder class="app__bottom__column">
      <UserItems />
    </BlockWithBorder>
    <BlockWithBorder class="app__bottom__column"> ChoiseItems </BlockWithBorder>
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
