import { getUserItems } from '@/shared/api'
import type { IItemDto } from '@/shared/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserItemsStore = defineStore('userItems', () => {
  const list = ref<IItemDto[]>([])

  function fetchList() {
    list.value = getUserItems()
  }

  function updateItem(item: IItemDto) {
    console.log()

    list.value.forEach((el, index) => {
      if (el.id === item.id) {
        list.value[index] = { ...item }
      }
    })
  }
  const getList = computed(() => {
    return list.value
  })

  return { getList, fetchList, updateItem }
})

// interface IStore {
//   list: IItemDto[]
// }

// const defaultValue: IStore = {
//   list: [],
// }

// export const useUserItemsStore = defineStore('userItems',
// {
//   state: () => ({ ...defaultValue }),
//   actions: {
//     fetchList() {
//       this.list = getUserItems()
//     },
//   },
//   getters: {
//     getList: (state) => state.list,
//   },
// }
// )
