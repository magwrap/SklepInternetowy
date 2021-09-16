import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ViewProduct} from '@/screens/home/ProductScreen/ProductScreen';
import {HeaderProduct} from '@/components/Headers/HeaderProduct/Header';
import {Shop} from '@/screens/shop/ShopScreen';
import {HeaderShop} from '@/components/Headers/HeaderShop/Header';
import {cartRoutes} from './cartRoutes';

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
    <Stack.Navigator initialRouteName="Shop">
      <Stack.Screen name="Shop" component={Shop} options={HeaderShop} />
      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={HeaderProduct}
      />
      {cartRoutes(Stack)}
    </Stack.Navigator>
  );
};
