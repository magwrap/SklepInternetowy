import {AddedToBasketInfo} from '@/components/AddedToBaskedInfo/AddedToBasketInfo';
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
  const [showInfo, setShowInfo] = useState(false);
  const {updateCart} = useCartContext();

  const viewInfo = () => {
    setShowInfo(true);
    setTimeout(() => setShowInfo(false), 1250);
  };

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
          viewInfo();
        }}
        style={styles}
      />

      {showInfo && <AddedToBasketInfo />}
    </View>
  );
};
