import {AddToCartButton} from '@/components/Buttons/AddToCartButton/AddToCartButton';
import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import {styles} from './styles';
import {ProductProps} from '@/models/product';

interface ProductScreenProps {
  route: {
    params: {
      data: ProductProps;
    };
  };
}

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
            <Text>{data.price} PLN</Text>
          </View>
          <AddToCartButton item={data} />
        </View>

        <View style={styles.section}>
          <Text style={styles.bigFont}>Opis : </Text>
          <Text style={[styles.text, styles.paragraph]}>
            {data.description}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bigFont}>Specyfikacje : </Text>
          <Text style={[styles.text, styles.paragraph]}>
            dodac tabelke wyswietlajaca specyfikacje
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
