export interface IItem {
  id: number
  name: string
}

export interface IUserData {
  list: IItem[]
  maxActiveItems: number
  actvieItemsCount: number
}
