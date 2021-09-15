import {CartProductProps} from '@/models/product';

interface CalculateProps {
  cart: CartProductProps[];
}

export const calculatePrice = (cart: CalculateProps) => {
  let finalPrice = 0;
  cart.map((item: CartProductProps) => {
    finalPrice += +item.product.price * +item.quantity;
  });
  return finalPrice;
};
