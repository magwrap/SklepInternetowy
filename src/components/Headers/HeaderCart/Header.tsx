import {Button} from '@/components/Button';
import React from 'react';
import {headerStyling} from '../headerStyling';
import {styles} from './styles';

interface HeaderProps {
  route: {
    params: string;
  };
  navigation: any;
}
//TODO: naprawic
export const HeaderCart: Object = ({route, navigation}: HeaderProps) => {
  return {
    title: route.params,
    ...headerStyling,
    headerLeft: () => (
      <Button
        text={route.params == 'Cart' ? 'X' : '<-'}
        onPress={() => {
          navigation.goBack();
        }}
        style={styles}
      />
    ),
  };
};
