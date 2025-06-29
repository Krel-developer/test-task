import { useChoiceItemsStore } from '@/entities/choiceItems'
import type { IItemDto } from '@/shared/types'

export function selectChoiceItem(item: IItemDto) {
  const choiceItemsStore = useChoiceItemsStore()

  if (item.isActive) {
    choiceItemsStore.setCurentItem(null)
    choiceItemsStore.switchItemActivity(item.id)
  } else {
    if (choiceItemsStore.getCurrentItem) {
      choiceItemsStore.switchItemActivity(choiceItemsStore.getCurrentItem)
    }

    choiceItemsStore.switchItemActivity(item.id)
    choiceItemsStore.setCurentItem(item.id)
  }
}
