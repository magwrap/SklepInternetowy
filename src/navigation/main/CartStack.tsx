import React from 'react';
import {Cart} from '@/screens/shop/CartScreen';
import {HeaderCart} from '@/components/Headers/HeaderCart/Header';
import {Payment} from '@/screens/shop/PaymentScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {DeliveryAndPay} from '@/screens/shop/DelAndPayScreen/DeliveryAndPayScreen';
import {ViewProduct} from '@/screens/home/ProductScreen/ProductScreen';
import {HeaderProduct} from '@/components/Headers/HeaderProduct/Header';

type CartStackParamList = {
  Cart: {name: 'Cart'};
  Payment: {name: 'Payment'};
  DeliveryAndPay: {name: 'DeliveryAndPay'};
  ViewProduct: undefined;
};

const Stack = createStackNavigator<CartStackParamList>();

export const CartStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={HeaderCart}
        initialParams={{name: 'Cart'}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={HeaderCart}
        initialParams={{name: 'Payment'}}
      />
      <Stack.Screen
        name="DeliveryAndPay"
        component={DeliveryAndPay}
        options={HeaderCart}
        initialParams={{name: 'DeliveryAndPay'}}
      />

      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={HeaderProduct}
      />
    </Stack.Navigator>
  );
};
