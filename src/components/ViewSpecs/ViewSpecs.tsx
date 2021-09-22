import {texts} from '@/config/Texts';
import {ProductProps} from '@/models/product';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface ViewSpecsProps {
  specs: ProductProps['specifications'];
}

export const ViewSpecs: React.FC<ViewSpecsProps> = ({specs}) => {
  return (
    <View style={styles.table}>
      {Object.keys(specs).map((itemKey, index) => {
        return (
          <View
            style={[styles.listItem, index % 2 === 0 ? styles.evenItem : null]}
            key={index}>
            <Text style={[styles.text, styles.textKey]}>
              {texts.productScreen.specs[itemKey]}
            </Text>
            <Text style={styles.text}>{specs[itemKey]}</Text>
          </View>
        );
      })}
    </View>
  );
};
