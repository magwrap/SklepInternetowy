import React from 'react';

import {headerStyling} from '../headerStyling';
import {Button} from '@/components/Button';
import {goToCart} from '@/hooks/goToCart';

export const HeaderShop: Object = ({navigation}: any) => {
  return {
    title: 'Shop',
    headerRight: () => (
      <Button onPress={() => goToCart(navigation)} text={'Go to checkout'} />
    ),
    ...headerStyling,
  };
};
