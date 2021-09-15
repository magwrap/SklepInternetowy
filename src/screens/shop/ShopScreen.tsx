import React from 'react';
import {FlatList} from 'react-native';
import {Product} from '@/components/ProductItem/Product';

import {useProductContext} from '@/hooks/ProductProvider';

interface ShopProps {
  navigation: any;
}

export const Shop: React.FC<ShopProps> = ({navigation}) => {
  const {dummyData} = useProductContext();
  return (
    <FlatList
      data={dummyData}
      keyExtractor={item => JSON.stringify(item.id)}
      renderItem={({item}) => <Product navigation={navigation} data={item} />}
    />
  );
};
