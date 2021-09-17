import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useCartContext} from '@/hooks/CartProvider';
import {calculatePrice} from '@/hooks/priceModule';
import {styles} from './styles';
import {texts} from '@/config/Texts';

interface CartListFooterProps {}

export const CartListFooter: React.FC<CartListFooterProps> = ({}) => {
  const {cart, clearCart} = useCartContext();
  const finalPrice = calculatePrice(cart);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>
          {texts.cartListFooter.total} {finalPrice} {texts.currency}
        </Text>
        <TouchableOpacity onPress={() => clearCart()}>
          <Text style={styles.delete}>{texts.cartListFooter.emptyBasket}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
