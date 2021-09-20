import {texts} from '@/config/Texts';
import React from 'react';
import {headerStyling} from '../headerStyling';

import {CartReturnButton} from '@/components/Buttons/CartReturnButton';

interface HeaderProps {
  route: {
    params: {
      name: string;
    };
  };
  navigation: any;
}
export const HeaderCart: Object = ({route, navigation}: HeaderProps) => {
  return {
    title: texts.headerTitles[route.params.name],
    ...headerStyling,

    headerLeft: () => (
      <CartReturnButton route={route} navigation={navigation} />
    ),
  };
};
