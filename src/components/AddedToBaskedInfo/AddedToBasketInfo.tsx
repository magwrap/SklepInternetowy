import {texts} from '@/config/Texts';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface AddedToBasketInfoProps {}

export const AddedToBasketInfo: React.FC<AddedToBasketInfoProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{texts.addedToBasketInfo}</Text>
      <Text style={styles.greenText}>✓</Text>
    </View>
  );
};
