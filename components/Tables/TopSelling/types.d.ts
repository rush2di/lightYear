export interface ITopProductData {
  image: NodeRequire | string;
  name: string;
  rating: number;
  price: number;
}

export interface ITopSellingProps {
  items: ITopProductData[];
}
