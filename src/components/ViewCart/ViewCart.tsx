import {CartProductProps} from '@/models/product';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {QuantityChanger} from '../QuantityChanger/QuantityChanger';
import {useCartContext} from '@/hooks/CartProvider';
import {styles} from './styles';
import {imageStyles} from '@/styles/imageStyles';
import {texts} from '@/config/Texts';

interface ViewCartProps {
  item: CartProductProps;
  navigation: any;
}

export const ViewCart: React.FC<ViewCartProps> = ({item, navigation}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const {updateCart} = useCartContext();

  if (item.quantity == 0) {
    return null;
  }
  const photo = {
    uri: item.product.photo,
  };

  const changeQuantity = (quan: number) => {
    let num: number;
    if (quan > quantity) {
      num = 1;
    } else {
      num = -1;
    }
    setQuantity(quan);
    updateCart(item.product, num);
  };

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ViewProduct', {
              data: item.product,
            })
          }
          style={imageStyles.imageContainer}>
          <Image source={photo} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>{item.product.name} </Text>
      </View>
      <View style={styles.product}>
        <Text style={[styles.text, {fontSize: 18}]}>
          {item.product.price} {texts.currency}
        </Text>
      </View>
      <View style={styles.product}>
        <QuantityChanger
          quantity={quantity}
          setQuantity={changeQuantity}
          style={styles}
          goBelowOne={true}
        />
      </View>
    </View>
  );
};
