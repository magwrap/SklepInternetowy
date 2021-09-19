import React from 'react';
import {MainTabs} from './MainTabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import {CartStack} from './CartStack';
import {Colors} from '@/config/Colors';

type MainTabsParamList = {
  MainTabs: undefined;
  CartStack: undefined;
};

interface MainDrawerProps {}

const Drawer = createDrawerNavigator<MainTabsParamList>();

export const MainDrawer: React.FC<MainDrawerProps> = ({}) => {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      drawerStyle={{
        backgroundColor: Colors.black,
        width: 240,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="MainTabs" component={MainTabs} />
      <Drawer.Screen name="CartStack" component={CartStack} />
    </Drawer.Navigator>
  );
};
