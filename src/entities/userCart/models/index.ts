import type { IItem } from '@/shared/api'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserCartStore = defineStore('userCart', () => {
  const activeItems = ref<IItem[]>([])

  // Устанавливаем ограничение на кол-во добалвеных предметов в корзину
  // В данном случае 6
  const maxItems = ref<number>(6)

  function addActiveItem(item: IItem) {
    activeItems.value.push(item)
  }
  const getActiveItems = computed(() => activeItems.value)
  const getActvieItemsCount = computed(() => activeItems.value.length)
  const getMaxActiveItems = computed(() => maxItems.value)

  return {
    getActiveItems,
    getActvieItemsCount,
    getMaxActiveItems,
    addActiveItem,
  }
})

// interface IStore {
//   activeItems: IItem[]
//   maxItems: number
// }

// const defaultValue: IStore = {
//   activeItems: [],
//   maxItems: 6,
// }

// export const useUserCartStore = defineStore('userCart', {
//   state: () => ({ ...defaultValue }),
//   actions: {
//     addActiveItem(item: IItem) {
//       this.activeItems.push(item)
//     },
//   },
//   getters: {
//     getActiveItems: (state) => state.activeItems,
//     getActvieItemsCount: (state) => state.activeItems.length,
//     getMaxActiveItems: (state) => state.maxItems,
//   },
// })
