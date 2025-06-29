import { getUserItems, type IItem } from '@/shared/api'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserItemsStore = defineStore('userItems', () => {
  const list = ref<IItem[]>([])

  function fetchList() {
    list.value = getUserItems()
  }
  const getList = computed(() => {
    return list.value
  })

  return { getList, fetchList }
})

// interface IStore {
//   list: IItem[]
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
