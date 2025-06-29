import { useUserCartStore } from '@/entities/userCart'
import { useUserItemsStore } from '@/entities/userItems'
import type { IItemDto } from '@/shared/types'

export function selectUserItem(item: IItemDto) {
  const userCartStore = useUserCartStore()
  const userItemsStore = useUserItemsStore()
  if (
    userCartStore.getActvieItemsCount < userCartStore.getMaxActiveItems &&
    !item.isActive
  ) {
    userCartStore.addActiveItem(item)
  } else {
    userCartStore.removeActiveItem(item)
  }
  userItemsStore.switchItemActivity(item.id)
}
