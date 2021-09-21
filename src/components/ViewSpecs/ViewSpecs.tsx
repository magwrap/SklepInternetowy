import {texts} from '@/config/Texts';
import {ProductProps} from '@/models/product';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface ViewSpecsProps {
  specs: ProductProps['specifications'];
}
//TODO: poprawic tabelke wyswietlajaca specyfikacje
export const ViewSpecs: React.FC<ViewSpecsProps> = ({specs}) => {
  return (
    <View style={styles.table}>
      <View style={[styles.listItem, styles.evenItem]}>
        <Text style={[styles.text, styles.textKey]}>
          {texts.productScreen.specs.lengthCM}
        </Text>
        <Text style={styles.text}>
          {specs.lengthCM}
          {texts.productScreen.specs.lengthUnit}
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text style={[styles.text, styles.textKey]}>
          {' '}
          {texts.productScreen.specs.weightG}
        </Text>
        <Text style={styles.text}>
          {specs.weightG}
          {texts.productScreen.specs.weightUnit}
        </Text>
      </View>

      <View style={[styles.listItem, styles.evenItem]}>
        <Text style={[styles.text, styles.textKey]}>
          {texts.productScreen.specs.temperature}
        </Text>
        <Text style={styles.text}>{specs.temperature}</Text>
      </View>

      <View style={styles.listItem}>
        <Text style={[styles.text, styles.textKey]}>
          {' '}
          {texts.productScreen.specs.veins}
        </Text>
        <Text style={styles.text}>{specs.veins}</Text>
      </View>
      <View style={[styles.listItem, styles.evenItem]}>
        <Text style={[styles.text, styles.textKey]}>
          {texts.productScreen.specs.application}
        </Text>
        <Text style={styles.text}>{specs.application}</Text>
      </View>

      {/* Wiecej Specyfikacji */}

      <View style={styles.listItem}>
        <Text style={[styles.text, styles.textKey]}></Text>
        <Text style={styles.text}></Text>
      </View>
      <View style={[styles.listItem, styles.evenItem]}>
        <Text style={[styles.text, styles.textKey]}></Text>
        <Text style={styles.text}></Text>
      </View>

      <View style={styles.listItem}>
        <Text style={[styles.text, styles.textKey]}></Text>
        <Text style={styles.text}></Text>
      </View>
      <View style={[styles.listItem, styles.evenItem]}>
        <Text style={[styles.text, styles.textKey]}></Text>
        <Text style={styles.text}></Text>
      </View>
    </View>
  );
};
