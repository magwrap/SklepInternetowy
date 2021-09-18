import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useCartContext} from '@/hooks/CartProvider';
import {ViewCart} from '@/components/ViewCart/ViewCart';
import {styles} from './styles';
import {CartListHeader} from '@/components/Headers/CartListHeader/CartListHeader';
import {CartListFooter} from '@/components/CartListFooter/CartListFooter';
import {GoToPaymentButton} from '@/components/Buttons/GoToPaymentButton/GoToPaymentButton';
import {texts} from '@/config/Texts';

interface CartProps {
  navigation: any;
}
export const Cart: React.FC<CartProps> = ({navigation}) => {
  const {cart} = useCartContext();
  const emptyCart = cart.length > 1;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>
        {texts.cartScreen.headline}
      </Text>
      {emptyCart ? (
        <FlatList
          data={cart}
          keyExtractor={item => JSON.stringify(item.product.id)}
          renderItem={({item}) => (
            <ViewCart item={item} navigation={navigation} />
          )}
          ListHeaderComponent={() => <CartListHeader />}
          ListFooterComponent={() => <CartListFooter />}
        />
      ) : (
        <Text>{texts.cartScreen.emptyCart}</Text>
      )}

      <GoToPaymentButton navigation={navigation} disabled={emptyCart} />
    </View>
  );
};
