import type { IItemDto } from '@/shared/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserCartStore = defineStore('userCart', () => {
  const activeItems = ref<IItemDto[]>([])

  // Устанавливаем ограничение на кол-во добалвеных предметов в корзину
  // В данном случае 6
  const maxItems = ref<number>(6)

  function addActiveItem(item: IItemDto) {
    activeItems.value.push(item)
  }

  function removeActiveItem(item: IItemDto) {
    activeItems.value = activeItems.value.filter((el) => el.id != item.id)
  }

  const getActiveItems = computed(() => activeItems.value)
  const getActvieItemsCount = computed(() => activeItems.value.length)
  const getMaxActiveItems = computed(() => maxItems.value)

  return {
    getActiveItems,
    getActvieItemsCount,
    getMaxActiveItems,
    addActiveItem,
    removeActiveItem,
  }
})

// interface IStore {
//   activeItems: IItemDto[]
//   maxItems: number
// }

// const defaultValue: IStore = {
//   activeItems: [],
//   maxItems: 6,
// }

// export const useUserCartStore = defineStore('userCart', {
//   state: () => ({ ...defaultValue }),
//   actions: {
//     addActiveItem(item: IItemDto) {
//       this.activeItems.push(item)
//     },
//   },
//   getters: {
//     getActiveItems: (state) => state.activeItems,
//     getActvieItemsCount: (state) => state.activeItems.length,
//     getMaxActiveItems: (state) => state.maxItems,
//   },
// })
