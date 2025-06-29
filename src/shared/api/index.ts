import userItems from './__mock__/userItems.json'
import choiсeItems from './__mock__/choiсeItems.json'
import { mapsItemDto } from './maps/mapsItemDto'
import type { IItemDto } from '../types'

export function getUserItems(): IItemDto[] {
  return userItems.map((item) => mapsItemDto(item))
}
export function getChoiceItems(): IItemDto[] {
  return choiсeItems.map((item) => mapsItemDto(item))
}
