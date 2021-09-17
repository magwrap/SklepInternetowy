import React from 'react';
import {useAuthContext} from '@/hooks/AuthProvider';

import {headerStyling} from '../headerStyling';
import {Button} from '@/components/Button';
import {texts} from '@/config/Texts';

export const HeaderHome: Object = ({}) => {
  const {logout} = useAuthContext();
  return {
    title: texts.headerTitles.Home,
    headerRight: () => <Button onPress={() => logout()} text={texts.logout} />,
    ...headerStyling,
  };
};
