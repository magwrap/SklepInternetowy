import {Button} from '@/components/Button';
import React from 'react';
import {headerStyling} from '../headerStyling';

interface HeaderProps {
  route: {
    params: {
      data: {
        name: String;
      };
    };
  };
  navigation: any;
}

export const HeaderProduct: Object = ({route, navigation}: HeaderProps) => {
  return {
    title: route.params.data.name,
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Cart')}
        text={'Go to checkout'}
      />
    ),
    ...headerStyling,
  };
};
