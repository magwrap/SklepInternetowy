import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useCartContext} from '@/hooks/CartProvider';
import {ViewCart} from '@/components/ViewCart/ViewCart';
import {styles} from './styles';
import {CartListHeader} from '@/components/Headers/CartListHeader/CartListHeader';
import {CartListFooter} from '@/components/CartListFooter/CartListFooter';
import {GoToPaymentButton} from '@/components/Buttons/GoToPaymentButton/GoToPaymentButton';

interface CartProps {
  navigation: any;
}
//TODO: dodac alert wyswietlajacy sie gdy nie ma zadnych produ
export const Cart: React.FC<CartProps> = ({navigation}) => {
  const {cart} = useCartContext();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>Your Cart</Text>
      {cart ? (
        <FlatList
          data={cart}
          keyExtractor={item => JSON.stringify(item.product.id)}
          renderItem={({item}) => <ViewCart item={item} />}
          ListHeaderComponent={() => <CartListHeader />}
          ListFooterComponent={() => <CartListFooter />}
        />
      ) : (
        <Text>Your cart is empty</Text>
      )}

      <GoToPaymentButton navigation={navigation} />
    </View>
  );
};
