import React from 'react';
import {View, ScrollView} from 'react-native';

import {ShopInfo} from '@/components/ShopInfo/ShopInfo';
import {Offers} from '@/components/Offers/Offers';
import {Products} from '@/components/Products/Products';
import {styles} from './styles';

interface HomeProps {
  navigation: any;
}

export const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <ShopInfo />
        <Offers />

        <Products navigation={navigation} />
      </ScrollView>
    </View>
  );
};
