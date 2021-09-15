import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface WarningsProps {
  prop: string;
  viewWarnings: boolean;
}

export const WarningText: React.FC<WarningsProps> = ({prop, viewWarnings}) => {
  const requiredField = 'This field is required';
  return (
    <View style={styles.warningField}>
      <Text style={styles.warningText}>
        {prop || !viewWarnings ? '' : requiredField}
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
