import {useCartContext} from '@/hooks/CartProvider';
import {ProductProps} from '@/models/product';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../Button';
import {QuantityChanger} from '../../QuantityChanger/QuantityChanger';
import {styles} from './styles';

interface AddToCartButtonProps {
  item: ProductProps;
}
//TODO: po dodaniu alert ze dodano - pytanie czy konytuowac zakupy czy isc do kasy
export const AddToCartButton: React.FC<AddToCartButtonProps> = ({item}) => {
  const [quantity, setQuantity] = useState(1);
  const {updateCart} = useCartContext();

  return (
    <View style={styles.container}>
      <QuantityChanger
        quantity={quantity}
        setQuantity={setQuantity}
        style={styles}
      />
      <Button
        text="Add to Cart"
        onPress={() => {
          updateCart(item, quantity);
        }}
        style={styles}
      />
    </View>
  );
};
