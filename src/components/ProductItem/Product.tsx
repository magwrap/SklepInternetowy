import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface ProductProps {
  navigation: any;
  data: {
    name: string;
    description: string;
    price: string;
    photo: string;
  };
}

export const Product: React.FC<ProductProps> = ({
  navigation,
  data,
}: ProductProps) => {
  const photo = {uri: data.photo};
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ViewProduct', {
          data: data,
        })
      }
      style={styles.container}>
      <Image source={photo} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.price}>{data.price} PLN</Text>
      </View>
    </TouchableOpacity>
  );
};
