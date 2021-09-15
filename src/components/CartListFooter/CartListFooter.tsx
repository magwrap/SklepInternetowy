import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useCartContext} from '@/hooks/CartProvider';
import {calculatePrice} from '@/hooks/priceModule';
import {styles} from './styles';

interface CartListFooterProps {}

export const CartListFooter: React.FC<CartListFooterProps> = ({}) => {
  const {cart, clearCart} = useCartContext();
  const finalPrice = calculatePrice(cart);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>Total: {finalPrice} zł</Text>
        <TouchableOpacity onPress={() => clearCart()}>
          <Text style={styles.delete}>Empty basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
