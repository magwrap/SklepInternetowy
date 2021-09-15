import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@/screens/home/Home.screen';
import {ViewProduct} from '@/screens/home/ProductScreen/ProductScreen';
import {HeaderHome} from '@/components/Headers/HeaderHome/Header';
import {HeaderProduct} from '@/components/Headers/HeaderProduct/Header';

type MainStackParamList = {
  Home: undefined;
  ViewProduct: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={HeaderHome} />
      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={HeaderProduct}
      />
    </Stack.Navigator>
  );
};
