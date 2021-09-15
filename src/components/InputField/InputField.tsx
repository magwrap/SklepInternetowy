import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {warningBorderColor, WarningText} from '@/components/warnings/Warnings';
import {styles} from './styles';

interface InputFieldProps {
  name: string;
  prop: string;
  setProp: React.Dispatch<React.SetStateAction<string>>;
  viewWarnings: boolean;
  style?: {
    inputField: Object;
    label: Object;
    input: Object;
  };
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  prop,
  setProp,
  viewWarnings,
  style = styles,
  placeholder = `Insert your ${name}`,
  secureTextEntry = false,
}) => {
  return (
    <View style={style.inputField}>
      <Text style={[style.label, {textTransform: 'capitalize'}]}>{name} :</Text>
      <TextInput
        style={[style.input, warningBorderColor(prop, viewWarnings)]}
        value={prop}
        onChangeText={setProp}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      <WarningText prop={prop} viewWarnings={viewWarnings} />
    </View>
  );
};
