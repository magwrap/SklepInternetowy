import {ThemeT} from '@/theme/theme';
import {createBox} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

const BaseSafeAreaView = createBox<ThemeT, SafeAreaViewProps>(SafeAreaView);

interface AppContainerProps
  extends React.ComponentProps<typeof BaseSafeAreaView> {
  children: React.ReactNode;
}

export const AppContainer = ({children, ...rest}: AppContainerProps) => {
  return (
    <BaseSafeAreaView flex={1} bg="mainBackground" mb="l" {...rest}>
      {children}
    </BaseSafeAreaView>
  );
};
