import {texts} from '@/config/Texts';
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface WarningsProps {
  prop: string;
  viewWarnings: boolean;
}

export const WarningText: React.FC<WarningsProps> = ({prop, viewWarnings}) => {
  return (
    <View style={styles.warningField}>
      <Text style={styles.warningText}>
        {prop || !viewWarnings ? '' : texts.warningText}
      </Text>
    </View>
  );
};

export const warningBorderColor = (
  prop: WarningsProps['prop'],
  viewWarnings: WarningsProps['viewWarnings'],
) => {
  return {borderColor: prop || !viewWarnings ? 'black' : 'red'};
};
