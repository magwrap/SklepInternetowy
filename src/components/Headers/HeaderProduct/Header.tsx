import {Button} from '@/components/Button';
import {texts} from '@/config/Texts';
import {goToCart} from '@/hooks/goToCart';
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
        onPress={() => goToCart(navigation)}
        text={texts.headerGoToCheckout}
      />
    ),
    ...headerStyling,
  };
};
