import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '@/screens/auth/LoginScreen';
import {Register} from '@/screens/auth/RegistrationScreen';

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
``;
