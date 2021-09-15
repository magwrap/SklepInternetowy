import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface CartListHeaderProps {}

export const CartListHeader: React.FC<CartListHeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={styles.text}>Quantity</Text>
    </View>
  );
};
