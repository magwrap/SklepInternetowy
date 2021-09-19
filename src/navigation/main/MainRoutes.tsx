import {texts} from '@/config/Texts';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {TypedNavigator} from '@react-navigation/native';
import {TabNavigationState} from '@react-navigation/routers';
import React, {Props} from 'react';
import {HomeStack} from './HomeStack';
import {MainTabsParamList} from './MainTabs';
import {ShopStack} from './ShopStack';

export const MainRoutes = (
  Stack: TypedNavigator<
    MainTabsParamList,
    TabNavigationState<Record<string, object | undefined>>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap,
    ({
      initialRouteName,
      backBehavior,
      children,
      screenOptions,
      sceneContainerStyle,
      ...rest
    }: Props) => JSX.Element
  >,
) => {
  return (
    <>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: texts.headerTitles.Home,
        }}
      />
      <Stack.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          title: texts.headerTitles.Shop,
        }}
      />
    </>
  );
};
