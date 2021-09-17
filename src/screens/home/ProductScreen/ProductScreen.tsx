import {AddToCartButton} from '@/components/Buttons/AddToCartButton/AddToCartButton';
import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import {styles} from './styles';
import {ProductProps} from '@/models/product';
import {texts} from '@/config/Texts';

interface ProductScreenProps {
  route: {
    params: {
      data: ProductProps;
    };
  };
}
//TODO: dodac tabelke wyswietlajaca specyfikacje
export const ViewProduct: React.FC<ProductScreenProps> = ({route}) => {
  const data = route.params.data;
  const photo = {
    uri: data.photo,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={photo} />
        <View style={[styles.section, styles.important]}>
          <View style={styles.name}>
            <Text style={[styles.bigFont, styles.title]}>{data.name}</Text>
            <Text style={styles.price}>
              {data.price} {texts.currency}
            </Text>
          </View>
          <AddToCartButton item={data} />
        </View>

        <View style={styles.section}>
          <Text style={styles.bigFont}>{texts.productScreen.description}</Text>
          <Text style={[styles.text, styles.paragraph]}>
            {data.description}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bigFont}>
            {texts.productScreen.specifications}
          </Text>
          <Text style={[styles.text, styles.paragraph]}>
            dodac tabelke wyswietlajaca specyfikacje
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
