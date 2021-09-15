import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ViewProduct} from '@/screens/home/ProductScreen/ProductScreen';
import {HeaderProduct} from '@/components/Headers/HeaderProduct/Header';
import {Shop} from '@/screens/shop/ShopScreen';
import {HeaderShop} from '@/components/Headers/HeaderShop/Header';
import {Cart} from '@/screens/shop/CartScreen';
import {HeaderCart} from '@/components/Headers/HeaderCart/Header';
import {Payment} from '@/screens/shop/PaymentScreen';

type ShopStackParamList = {
  Shop: undefined;
  ViewProduct: undefined;
  Cart: undefined;
  Payment: undefined;
};

interface ShopStackProps {}

const Stack = createStackNavigator<ShopStackParamList>();

export const ShopStack: React.FC<ShopStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={Shop} options={HeaderShop} />
      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={HeaderProduct}
      />
      <Stack.Screen name="Cart" component={Cart} options={HeaderCart} />
      <Stack.Screen name="Payment" component={Payment} options={HeaderCart} />
    </Stack.Navigator>
  );
};
