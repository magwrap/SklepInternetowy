import React from 'react';
import {ThemeProvider as ShopifyThemeProvider} from '@shopify/restyle';
import {darkTheme, lightTheme} from './theme';
import {useAppSelector} from '@/store/store';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const themeType = useAppSelector(state => state.auth.theme);
  return (
    <ShopifyThemeProvider
      theme={themeType === 'light' ? lightTheme : darkTheme}>
      {children}
    </ShopifyThemeProvider>
  );
};
