import React from 'react';

import {headerStyling} from '../headerStyling';
import {Button} from '@/components/Button';

export const HeaderShop: Object = ({navigation}: any) => {
  return {
    title: 'Shop',
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('ShopStack', {screen: 'Cart'})}
        text={'Go to checkout'}
      />
    ),
    ...headerStyling,
  };
};
