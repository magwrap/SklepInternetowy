import React from 'react';
import {Text} from '@/components/atoms';
import {Image} from 'react-native';
import {styles} from './styles';
import {Card} from '@/components/Card/Card';
import {texts} from '@/config/Texts';
import {textStyles} from '@/styles/textStyles';

interface ShopInfoProps {}

export const ShopInfo: React.FC<ShopInfoProps> = ({}) => {
  const photo = {
    uri: 'https://picsum.photos/seed/picsum/200/300',
  };
  return (
    <Card>
      <Text style={textStyles.bigText}>{texts.shopName}</Text>
      <Text style={styles.text}>{texts.shopDescription}</Text>
      <Image style={styles.image} source={photo} />
    </Card>
  );
};
