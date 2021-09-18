import {AddedToBasketInfo} from '@/components/AddedToBaskedInfo/AddedToBasketInfo';
import {useCartContext} from '@/hooks/CartProvider';
import {ProductProps} from '@/models/product';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {QuantityChanger} from '../../QuantityChanger/QuantityChanger';
import {styles} from './styles';

interface AddToCartButtonProps {
  item: ProductProps;
  viewQuantity?: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  item,
  viewQuantity = true,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [showInfo, setShowInfo] = useState(false);
  const {updateCart} = useCartContext();

  const viewInfo = () => {
    setShowInfo(true);
    setTimeout(() => setShowInfo(false), 1250);
  };

  return (
    <View style={styles.container}>
      {viewQuantity && (
        <QuantityChanger
          quantity={quantity}
          setQuantity={setQuantity}
          style={styles}
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          updateCart(item, quantity);
          viewInfo();
        }}>
        <Image source={require('@/assets/shopping-cart.png')} />
      </TouchableOpacity>

      {showInfo && <AddedToBasketInfo />}
    </View>
  );
};
