import React from 'react';
import {FlatList, View} from 'react-native';
import {Product} from '@/components/ProductItem/Product';

import {useProductContext} from '@/hooks/ProductProvider';
import {Card} from '@/components/Card/Card';
import {styles} from './styles';

interface ShopProps {
  navigation: any;
}

export const Shop: React.FC<ShopProps> = ({navigation}) => {
  const {dummyData} = useProductContext();
  return (
    <FlatList
      style={styles.container}
      data={dummyData}
      keyExtractor={item => JSON.stringify(item.id)}
      renderItem={({item}) => (
        <Card>
          <Product navigation={navigation} data={item} />
        </Card>
      )}
    />
  );
};
