import React from 'react';
import {Product} from '../ProductItem/Product';
import {Card} from '@/components/Card/Card';
import {useProductContext} from '@/hooks/ProductProvider';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {texts} from '@/config/Texts';
import {textStyles} from '@/styles/textStyles';

interface ProductsProps {
  navigation: any;
}
//TODO: dodac funkcje przyjmujaca 3(maxProducts) id(lub nazwy) i zwraca je jako obiekty do wyswietlenia w highlightach

export const Products: React.FC<ProductsProps> = ({navigation}) => {
  const {dummyData} = useProductContext();
  const maxProducts = 3;
  return (
    <Card>
      <Text style={textStyles.bigText}>{texts.highlihtedProductsInfo}</Text>
      {dummyData.map((item: Object, index: number) => {
        if (index < maxProducts) {
          return <Product navigation={navigation} data={item} key={index} />;
        }
        return null;
      })}
      <TouchableOpacity
        onPress={() => navigation.navigate('ShopStack', {screen: 'Shop'})}
        style={styles.link}>
        <Text style={styles.text}>{texts.productsMore}</Text>
      </TouchableOpacity>
    </Card>
  );
};
