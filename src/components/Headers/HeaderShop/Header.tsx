import React from 'react';

import {headerStyling} from '../headerStyling';
import {Button} from '@/components/Button';
import {goToCart} from '@/hooks/goToCart';
import {texts} from '@/config/Texts';
import {OpenDrawer} from '@/components/OpenDrawer';

export const HeaderShop: Object = ({navigation}: any) => {
  return {
    title: texts.headerTitles.Shop,
    headerRight: () => (
      <Button
        onPress={() => goToCart(navigation)}
        text={texts.headerGoToCheckout}
      />
    ),
    headerLeft: () => <OpenDrawer navigation={navigation} />,
    ...headerStyling,
  };
};
