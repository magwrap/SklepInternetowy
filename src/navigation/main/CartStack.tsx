import React from 'react';
import {Cart} from '@/screens/shop/CartScreen';
import {HeaderCart} from '@/components/Headers/HeaderCart/Header';
import {Payment} from '@/screens/shop/PaymentScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {DeliveryAndPay} from '@/screens/shop/DelAndPayScreen/DeliveryAndPayScreen';

type CartStackParamList = {
  Cart: undefined;
  Payment: undefined;
  DeliveryAndPay: undefined;
};

const Stack = createStackNavigator<CartStackParamList>();

export const CartStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} options={HeaderCart} />
      <Stack.Screen name="Payment" component={Payment} options={HeaderCart} />
      <Stack.Screen
        name="DeliveryAndPay"
        component={DeliveryAndPay}
        options={HeaderCart}
      />
    </Stack.Navigator>
  );
};
