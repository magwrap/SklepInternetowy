import React from 'react';
import {useAuthContext} from '@/hooks/AuthProvider';

import {headerStyling} from '../headerStyling';
import {Button} from '@/components/Button';
import {texts} from '@/config/Texts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';

export const HeaderHome: Object = ({navigation}: any) => {
  const {logout} = useAuthContext();
  return {
    title: texts.headerTitles.Home,
    headerRight: () => <Button onPress={() => logout()} text={texts.logout} />,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={{marginLeft: 12}}>
        <Image
          source={require('@/assets/menu.png')}
          style={{height: 20, width: 17}}
        />
      </TouchableOpacity>
    ),
    ...headerStyling,
  };
};
