export interface IFood {
  id: number,
  name: string,
  price: number ,
  image: string,
  description: string
}

export interface IFoodsSliceState {
  foods: IFood[] | null
}