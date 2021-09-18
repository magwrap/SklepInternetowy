import {texts} from '@/config/Texts';
import {imageStyles} from '@/styles/imageStyles';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AddToCartButton} from '../Buttons/AddToCartButton/AddToCartButton';
import {styles} from './styles';
import {ProductProps} from '@/models/product';

interface ProductItemProps {
  navigation: any;
  data: ProductProps;
}
export const Product: React.FC<ProductItemProps> = ({navigation, data}) => {
  const photo = {uri: data.photo};
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ViewProduct', {
            data: data,
          })
        }
        style={styles.left}>
        <View style={imageStyles.imageContainer}>
          <Image source={photo} style={imageStyles.image} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.price}>
            {data.price} {texts.currency}
          </Text>
        </View>
      </TouchableOpacity>
      <AddToCartButton item={data} viewQuantity={false} />
    </View>
  );
};
