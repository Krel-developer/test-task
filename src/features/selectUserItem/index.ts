import { useUserCartStore } from '@/entities/userCart'

export function selectUserItem(item: any) {
  const userCartStore = useUserCartStore()
  if (userCartStore.getActvieItemsCount < userCartStore.getMaxActiveItems) {
    userCartStore.addActiveItem(item)
  }
}
