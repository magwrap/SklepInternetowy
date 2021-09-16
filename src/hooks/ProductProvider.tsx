import {ProductProps} from '@/models/product';
import React, {createContext, useContext} from 'react';

const ProductContext = createContext<{
  dummyData: [ProductProps];
}>({
  dummyData: [
    {
      id: 0,
      name: '',
      description: '',
      price: '',
      photo: '',
    },
  ],
});

//TODO: dodac: previousprice(jesli produkt jest na przecenie), specyfikacje(array obiektow- {ram : 8}, {pamiec : 64} ...)
export const useProductContext = () => useContext(ProductContext);

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
  const dummyData: ProductProps[] = [
    {
      id: 1,
      name: 'Kabel 1 ',
      description: 'a',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '100',
      photo: 'https://picsum.photos/200/300?random=1',
    },
    {
      id: 2,
      name: 'Kabel 2 ',
      description: 'a',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '100',
      photo: 'https://picsum.photos/200/300?random=2',
    },
    {
      id: 3,
      name: 'Kabel 3 ',
      description: 'a',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '100',
      photo: 'https://picsum.photos/200/300?random=3',
    },

    {
      id: 4,
      name: 'Kabel 4 ',
      description: 'a',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '100',
      photo: 'https://picsum.photos/200/300?random=4',
    },
    {
      id: 5,
      name: 'Kabel 5 ',
      description: 'a',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '99.99',
      photo: 'https://picsum.photos/200/300?random=5',
    },
    {
      id: 6,
      name: 'Kabel 6 ',
      description: 'a',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: '80.99',
      photo: 'https://picsum.photos/200/300?random=6',
    },
  ];
  return (
    <ProductContext.Provider value={{dummyData}}>
      {children}
    </ProductContext.Provider>
  );
};
