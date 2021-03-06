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
    backgroundColor: Colors.thinYellow,
    borderBottomWidth: 1,
    borderRightWidth: 1.3,
    borderBottomRightRadius: 10,
    borderColor: Colors.lightBlack,
    marginBottom: 10,
  },
  itemLabel: {
    color: Colors.lightBlack,
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
