import React from 'react';

import {headerStyling} from '../headerStyling';
import {texts} from '@/config/Texts';
import {OpenDrawerButton} from '@/components/Buttons/OpenDrawerButton';
import {LogoutButton} from '@/components/Buttons/LogoutButton';

export const HeaderHome: Object = ({navigation}: any) => {
  return {
    title: texts.headerTitles.Home,
    headerRight: () => <LogoutButton />,
    headerLeft: () => <OpenDrawerButton navigation={navigation} />,
    ...headerStyling,
  };
};
