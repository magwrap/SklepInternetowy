import React from 'react';
import {headerStyling} from '../headerStyling';
import {texts} from '@/config/Texts';
import {OpenDrawerButton} from '@/components/Buttons/OpenDrawerButton';
import {GoToCartButton} from '@/components/Buttons/GoToCartButton';

export const HeaderShop: Object = ({navigation}: any) => {
  return {
    title: texts.headerTitles.Shop,
    headerRight: () => <GoToCartButton navigation={navigation} />,
    headerLeft: () => <OpenDrawerButton navigation={navigation} />,
    ...headerStyling,
  };
};
