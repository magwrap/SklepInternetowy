export type ProductProps = {
  id: number;
  name: string;
  price: string;
  description: string;
  photo: string;
};

export type CartProductProps = {
  product: ProductProps;
  quantity: number;
};
