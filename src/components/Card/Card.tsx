import {Colors} from '@/config/Colors';
import {imageStyles} from '@/styles/imageStyles';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CardProps {}

export const Card: React.FC<CardProps> = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

export const styles = StyleSheet.create({
  card: {
    ...imageStyles.imageContainer,
    backgroundColor: Colors.lightYellow,
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});
