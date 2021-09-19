import React from 'react';
import {useAuthContext} from '@/hooks/AuthProvider';

import {headerStyling} from '../headerStyling';
import {Button} from '@/components/Button';
import {texts} from '@/config/Texts';
import {OpenDrawer} from '@/components/OpenDrawer';

export const HeaderHome: Object = ({navigation}: any) => {
  const {logout} = useAuthContext();
  return {
    title: texts.headerTitles.Home,
    headerRight: () => <Button onPress={() => logout()} text={texts.logout} />,
    headerLeft: () => <OpenDrawer navigation={navigation} />,
    ...headerStyling,
  };
};
