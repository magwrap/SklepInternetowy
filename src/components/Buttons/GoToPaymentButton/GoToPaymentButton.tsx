import {Button} from '@/components/Button';
import {texts} from '@/config/Texts';
import React from 'react';
import {styles} from './styles';

interface GoToPaymentButtonProps {
  navigation: any;
  disabled?: boolean;
}

export const GoToPaymentButton: React.FC<GoToPaymentButtonProps> = ({
  navigation,
  disabled,
}) => {
  return (
    <Button
      text={texts.buy}
      onPress={() => {
        navigation.navigate('Payment');
      }}
      style={styles}
      disabled={!disabled}
    />
  );
};
