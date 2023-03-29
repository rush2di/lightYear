export interface IProductData {
  image: NodeRequire | string;
  trackingNo: string;
  name: string;
  price: number;
  orders: number;
}

export interface IOrderesProps {
  items: IProductData[];
}
