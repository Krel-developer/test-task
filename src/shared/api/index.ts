import type { IItem } from './types'
import userItems from './__mock__/userItems.json'
import choiсeItems from './__mock__/choiсeItems.json'

export function getUserItems(): IItem[] {
  return userItems
}
export function getChoiceItems(): IItem[] {
  return choiсeItems
}

export type { IItem }
