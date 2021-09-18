import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Card} from '@/components/Card/Card';
import {styles} from './styles';
import {useProductContext} from '@/hooks/ProductProvider';
import {Product} from '../ProductItem/Product';
import {useCartContext} from '@/hooks/CartProvider';
import {ProductProps} from '@/models/product';
import {goToCart} from '@/hooks/goToCart';
import {texts} from '@/config/Texts';
import {textStyles} from '@/styles/textStyles';

interface OffersProps {
  navigation: any;
}
//TODO: dodac funkcje szukajacego produktu z id na przecenie
export const Offers: React.FC<OffersProps> = ({navigation}) => {
  const {dummyData} = useProductContext();
  const {updateCart} = useCartContext();
  const item: ProductProps = dummyData[5];
  return (
    <Card>
      <Text style={textStyles.bigText}>{texts.offersHeadline}</Text>
      <Text style={[styles.bigText, styles.promotion]}>
        {texts.offersPromotion}
      </Text>
      <Product navigation={navigation} data={item} key={item.id} />
      <TouchableOpacity
        onPress={() => {
          goToCart(navigation);
          updateCart(item, 1);
        }}
        style={styles.link}>
        <Text style={styles.text}>{texts.offersBuyNow}</Text>
      </TouchableOpacity>
    </Card>
  );
};
