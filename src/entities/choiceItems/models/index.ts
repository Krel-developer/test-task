import { getChoiceItems, type IItem } from '@/shared/api'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useChoiceItemsStore = defineStore('choiceItems', () => {
  const list = ref<IItem[]>([])
  const currentItem = ref<null | number>(null)

  function setCurentItem(id: null | number) {
    currentItem.value = id
  }

  function fetchList() {
    list.value = getChoiceItems()
  }

  const getList = computed(() => list.value)
  const getCurentITemName = computed(() => {
    let currentItemName: string = ''
    const currentItemId = currentItem.value
    if (currentItemId) {
      list.value.forEach((el) => {
        if (el.id === currentItemId) {
          currentItemName = el.name
        }
      })
    }

    return currentItemName ? currentItemName : 'Предмет не выбран'
  })

  return { getCurentITemName, getList, fetchList, setCurentItem }
})

// interface IStore {
//   list: IItem[]
//   currentItem: null | number
// }

// const defaultValue: IStore = {
//   list: [],
//   currentItem: null,
// }

// export const useChoiceItemsStore = defineStore('choiceItems', {
//   state: () => ({ ...defaultValue }),
//   actions: {
//     setCurentItem(id: null | number) {
//       this.currentItem = id
//     },
//     fetchList() {
//       this.list = getChoiceItems()
//     },
//   },
//   getters: {
//     getList: (state) => state.list,
//     getCurentITemName: (state) => {
//       let currentItemName: string = ''
//       const currentItemId = state.currentItem
//       if (currentItemId) {
//         state.list.forEach((el) => {
//           if (el.id === currentItemId) {
//             currentItemName = el.name
//           }
//         })
//       }

//       return currentItemName ? currentItemName : 'Предмет не выбран'
//     },
//   },
// })
