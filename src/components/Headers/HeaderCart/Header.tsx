import {Button} from '@/components/Button';
import {texts} from '@/config/Texts';
import React from 'react';
import {headerStyling} from '../headerStyling';
import {styles} from './styles';

interface HeaderProps {
  route: {
    params: {
      name: string;
    };
  };
  navigation: any;
}
export const HeaderCart: Object = ({route, navigation}: HeaderProps) => {
  const name = JSON.stringify(route.params);
  console.log(name);
  return {
    title: texts.headerTitles[route.params.name],
    ...headerStyling,
    headerLeft: () => (
      <Button
        text={route.params.name === 'Cart' ? 'X' : '<-'}
        onPress={() => {
          navigation.goBack();
        }}
        style={styles}
      />
    ),
  };
};
