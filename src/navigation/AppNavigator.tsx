import React, {useState, useEffect} from 'react';

import {Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from '@/navigation/auth/AuthStack';
import {useAuthContext} from '@/hooks/AuthProvider';
import {MainDrawer} from './main/MainDrawer';

export const AppNavigator = () => {
  const {user} = useAuthContext();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //check if user is logged in or not - logic
    setLoading(false);
  });

  if (loading) {
    return (
      <>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </>
    );
  }
  return (
    <NavigationContainer>
      {user ? (
        <>
          <MainDrawer />
        </>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
