import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '@/config/Colors';
import {MainRoutes} from './MainRoutes';

export type MainTabsParamList = {
  HomeStack: undefined;
  ShopStack: undefined;
};

const Tabs = createBottomTabNavigator<MainTabsParamList>();

export const MainTabs: React.FC = ({}) => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'HomeStack') {
            return <Entypo name="home" size={size} color={color} />;
          } else if (route.name === 'ShopStack') {
            return <Entypo name="shop" size={size} color={color} />;
          }
          return <AntDesign name="loading1" size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.yellow,
        inactiveTintColor: Colors.realWhite,
        style: {
          backgroundColor: Colors.black,
          padding: 5,
          paddingBottom: 5,
        },
      }}>
      {MainRoutes(Tabs)}
    </Tabs.Navigator>
  );
};
