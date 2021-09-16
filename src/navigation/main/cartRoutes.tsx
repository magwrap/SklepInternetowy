import React from 'react';
import {Cart} from '@/screens/shop/CartScreen';
import {HeaderCart} from '@/components/Headers/HeaderCart/Header';
import {Payment} from '@/screens/shop/PaymentScreen';

export const cartRoutes = (Stack: any) => {
  return (
    <>
      <Stack.Screen name="Cart" component={Cart} options={HeaderCart} />
      <Stack.Screen name="Payment" component={Payment} options={HeaderCart} />
    </>
  );
};
