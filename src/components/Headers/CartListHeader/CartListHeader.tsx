import {texts} from '@/config/Texts';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface CartListHeaderProps {}

export const CartListHeader: React.FC<CartListHeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{texts.cartLabels.products}</Text>
      <Text style={styles.text}>{texts.cartLabels.price}</Text>
      <Text style={styles.text}>{texts.cartLabels.quantity}</Text>
    </View>
  );
};
