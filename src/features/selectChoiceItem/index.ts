import { useChoiceItemsStore } from '@/entities/choiceItems'

export function selectChoiceItem(item: { id: number; name: string }) {
  const choiceItemsStore = useChoiceItemsStore()

  choiceItemsStore.setCurentItem(item.id)
}
