import React from 'react';
import {Product} from '../Product/Product';
import {Card} from '@/components/Card/Card';
import {useProductContext} from '@/hooks/ProductProvider';
import {TouchableOpacity, Text} from 'react-native';
import {Colors} from '@/config/Colors';

interface ProductsProps {
  navigation: any;
}

export const Products: React.FC<ProductsProps> = ({navigation}) => {
  const {dummyData} = useProductContext();
  const maxProducts = 3;
  return (
    <Card>
      {dummyData.map((item: Object, index: number) => {
        if (index < maxProducts) {
          return <Product navigation={navigation} data={item} key={index} />;
        }
        return null;
      })}
      <TouchableOpacity
        onPress={() => navigation.navigate('ShopStack')}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 13,
            color: Colors.blue,
            textDecorationLine: 'underline',
            padding: 5,
            marginRight: 10,
          }}>
          More {'>>'}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};
