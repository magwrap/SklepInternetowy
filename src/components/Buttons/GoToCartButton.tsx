import {goToCart} from '@/hooks/goToCart';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

interface GoToCartButtonProps {
  navigation: any;
}

export const GoToCartButton: React.FC<GoToCartButtonProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => goToCart(navigation)}
      style={{marginRight: 20}}>
      <Entypo name="shopping-basket" size={27} color={'black'} />
    </TouchableOpacity>
  );
};
