import {Button} from '@/components/Button';
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
      text="Buy"
      onPress={() => {
        navigation.navigate('Payment');
      }}
      style={styles}
      disabled={!disabled}
    />
  );
};
