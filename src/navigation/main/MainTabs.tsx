import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './HomeStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ShopStack} from './ShopStack';
import {Colors} from '@/config/Colors';

type MainTabsParamList = {
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
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'comments' : 'comments';
          } else if (route.name === 'ShopStack') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          return <AntDesign name={'forward'} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.yellow,
        inactiveTintColor: Colors.realWhite,
        style: {
          backgroundColor: Colors.black,
          paddingBottom: 5,
        },
      }}>
      <Tabs.Screen name="HomeStack" component={HomeStack} />
      <Tabs.Screen name="ShopStack" component={ShopStack} />
    </Tabs.Navigator>
  );
};
