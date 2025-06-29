import type { IItemDto } from '@/shared/types'
import type { IItem } from '../types'

export function mapsItemDto(item: IItem): IItemDto {
  return {
    ...item,
    isActive: false,
  }
}
