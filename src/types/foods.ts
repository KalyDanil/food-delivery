export interface IFood {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface IOrderFood extends IFood {
  amount: number;
}
