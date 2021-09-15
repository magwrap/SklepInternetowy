import React from 'react';
import 'react-native-gesture-handler';
import {AppNavigator} from './navigation/AppNavigator';
import {ThemeProvider} from './theme/theme.provider';
import {StoreProvider} from './store/store.provider';
import {AuthProvider} from './hooks/AuthProvider';
import {ProductProvider} from './hooks/ProductProvider';
import {CartProvider} from './hooks/CartProvider';

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <AppNavigator />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
export default App;
