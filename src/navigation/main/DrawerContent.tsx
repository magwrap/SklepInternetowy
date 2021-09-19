import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {goToCart} from '@/hooks/goToCart';
import {texts} from '@/config/Texts';
import {StyleSheet} from 'react-native';
import {Colors} from '@/config/Colors';

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
        style={styles.item}
        labelStyle={styles.itemLabel}
      />
      <DrawerItem
        label={texts.headerTitles.Shop}
        onPress={() =>
          props.navigation.navigate('MainTabs', {
            screen: 'ShopStack',
          })
        }
        style={styles.item}
        labelStyle={styles.itemLabel}
      />
      <DrawerItem
        label={texts.headerTitles.Cart}
        onPress={() => goToCart(props.navigation)}
        style={styles.item}
        labelStyle={styles.itemLabel}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.black,
    borderBottomWidth: 1,
    borderColor: Colors.yellow,
  },
  itemLabel: {
    color: Colors.realWhite,
  },
});
