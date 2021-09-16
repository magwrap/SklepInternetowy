import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Card} from '@/components/Card/Card';
import {styles} from './styles';
import {useProductContext} from '@/hooks/ProductProvider';
import {Product} from '../ProductItem/Product';
import {useCartContext} from '@/hooks/CartProvider';
import {ProductProps} from '@/models/product';
import {goToCart} from '@/hooks/goToCart';

interface OffersProps {
  navigation: any;
}
//TODO: dodac funkcje szukajacego produktu z id na przecenie
export const Offers: React.FC<OffersProps> = ({navigation}) => {
  const {dummyData} = useProductContext();
  const {updateCart} = useCartContext();
  const item: ProductProps = dummyData[5];
  const promotion = '19% zniżki!';
  return (
    <Card>
      <Text style={styles.bigText}>Oferta dnia</Text>
      <Text style={[styles.bigText, styles.promotion]}>{promotion}</Text>
      <Product navigation={navigation} data={item} key={item.id} />
      <TouchableOpacity
        onPress={() => {
          goToCart(navigation);
          updateCart(item, 1);
        }}
        style={styles.link}>
        <Text style={styles.text}>Buy Now {'>>'}</Text>
      </TouchableOpacity>
    </Card>
  );
};
