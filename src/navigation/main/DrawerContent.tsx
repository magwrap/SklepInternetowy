import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItemList,
} from '@react-navigation/drawer';
import {goToCart} from '@/hooks/goToCart';
import {texts} from '@/config/Texts';

export const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={texts.headerTitles.Home}
        onPress={() =>
          props.navigation.navigate('MainTabs', {
            screen: 'HomeStack',
          })
        }
        style={{backgroundColor: 'red'}}
      />
      <DrawerItem
        label={texts.headerTitles.Shop}
        onPress={() =>
          props.navigation.navigate('MainTabs', {
            screen: 'ShopStack',
          })
        }
      />
      <DrawerItem
        label={texts.headerTitles.Cart}
        onPress={() => goToCart(props.navigation)}
      />
    </DrawerContentScrollView>
  );
};
