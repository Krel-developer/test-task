import { useUserCartStore } from '@/entities/userCart'
import type { IItem } from '@/shared/api'

export function selectUserItem(item: IItem) {
  const userCartStore = useUserCartStore()
  if (userCartStore.getActvieItemsCount < userCartStore.getMaxActiveItems) {
    userCartStore.addActiveItem(item)
  }
}
