import React from 'react';
import {Text} from '@/components/atoms';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Card} from '@/components/Card/Card';

interface ShopInfoProps {}

export const ShopInfo: React.FC<ShopInfoProps> = ({}) => {
  const photo = {
    uri: 'https://picsum.photos/seed/picsum/200/300',
  };
  return (
    <Card>
      <Text style={[styles.text, styles.bigText]}>Nazwa sklepu</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Image style={styles.image} source={photo} />
    </Card>
  );
};
