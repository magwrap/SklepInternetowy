import React from 'react';
import {useAuthContext} from '@/hooks/AuthProvider';

import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {headerStyling} from '../headerStyling';
import {Button} from '@/components/Button';

export const HeaderHome: Object = ({}) => {
  const {logout} = useAuthContext();
  return {
    title: 'Home',
    headerRight: () => <Button onPress={() => logout()} text={'Logout'} />,
    ...headerStyling,
  };
};
