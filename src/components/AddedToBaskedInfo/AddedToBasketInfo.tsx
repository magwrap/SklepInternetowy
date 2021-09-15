import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface AddedToBasketInfoProps {}

export const AddedToBasketInfo: React.FC<AddedToBasketInfoProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Produkt dodany do koszyka</Text>
      <Text style={styles.greenText}>✓</Text>
    </View>
  );
};
