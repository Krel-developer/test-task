import { useUserCartStore } from '@/entities/userCart'
import { useUserItemsStore } from '@/entities/userItems'
import type { IItemDto } from '@/shared/types'

export function selectUserItem(item: IItemDto) {
  const userCartStore = useUserCartStore()
  const userItemsStore = useUserItemsStore()
  if (userCartStore.getActvieItemsCount < userCartStore.getMaxActiveItems) {
    const updatedItem: IItemDto = {
      ...item,
      isActive: !item.isActive,
    }
    userItemsStore.updateItem(updatedItem)
    if (item.isActive) {
      userCartStore.removeActiveItem(item)
    } else {
      userCartStore.addActiveItem(updatedItem)
    }
  }
}
