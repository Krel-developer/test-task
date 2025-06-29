import { useChoiceItemsStore } from '@/entities/choiceItems'
import type { IItem } from '@/shared/api'

export function selectChoiceItem(item: IItem) {
  const choiceItemsStore = useChoiceItemsStore()

  choiceItemsStore.setCurentItem(item.id)
}
