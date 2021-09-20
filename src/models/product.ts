export type ProductProps = {
  id: number;
  name: string;
  price: string;
  description: string;
  photo: string;
  specifications: {
    lengthCM: number;
    weightG: number;
    application: string;
    temperature: string;
    veins: number;
  };
};

export type CartProductProps = {
  product: ProductProps;
  quantity: number;
};
