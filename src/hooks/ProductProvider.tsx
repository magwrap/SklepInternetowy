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
      specifications: {
        lengthCM: 0,
        weightG: 0,
        application: '',
        temperature: ``,
        veins: 0,
      },
    },
  ],
});

export const useProductContext = () => useContext(ProductContext);

interface ProductProviderProps {
  children: React.ReactNode;
}

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const dummySpecs = {
  lengthCM: 100,
  weightG: 100,
  application: 'asdasd',
  temperature: `Elastycznie –25'C do +60'C; stacjonarnie –40'C do +80'C`,
  veins: 4,
};

export const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
  const dummyData: ProductProps[] = [
    {
      id: 1,
      name: 'Kabel 1 ',
      description: loremIpsum,
      price: '20.99',
      photo: 'https://picsum.photos/200/300?random=1',
      specifications: dummySpecs,
    },
    {
      id: 2,
      name: 'Kabel 2 ',
      description: loremIpsum,
      price: '12.99',
      photo: 'https://picsum.photos/200/300?random=2',
      specifications: dummySpecs,
    },
    {
      id: 3,
      name: 'Kabel 3 ',
      description: loremIpsum,

      price: '15.24',
      photo: 'https://picsum.photos/200/300?random=3',
      specifications: dummySpecs,
    },

    {
      id: 4,
      name: 'Kabel 4 ',
      description: loremIpsum,

      price: '199.99',
      photo: 'https://picsum.photos/200/300?random=4',
      specifications: dummySpecs,
    },
    {
      id: 5,
      name: 'Kabel 5 ',
      description: loremIpsum,

      price: '99.99',
      photo: 'https://picsum.photos/200/300?random=5',
      specifications: dummySpecs,
    },
    {
      id: 6,
      name: 'Kabel 6 ',
      description: loremIpsum,

      price: '80.99',
      photo: 'https://picsum.photos/200/300?random=6',
      specifications: dummySpecs,
    },
  ];
  return (
    <ProductContext.Provider value={{dummyData}}>
      {children}
    </ProductContext.Provider>
  );
};
