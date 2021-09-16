import {Button} from '@/components/Button';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface DeliveryAndPayProps {}

export const DeliveryAndPay: React.FC<DeliveryAndPayProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose your delivery method</Text>
      <View style={styles.pairOfButtons}>
        <Button text="Dhl" onPress={() => {}} style={styles} />
        <Button text="Inpost" onPress={() => {}} style={styles} />
      </View>
      <Button text="Ups" onPress={() => {}} style={styles} />
      <Text style={styles.header}>Choose your payment method</Text>
      <View style={styles.pairOfButtons}>
        <Button text="Blik" onPress={() => {}} style={styles} />
        <Button text="Credit card" onPress={() => {}} style={styles} />
      </View>
      <View style={styles.pairOfButtons}>
        <Button text="At the doorway" onPress={() => {}} style={styles} />
        <Button text="Bank" onPress={() => {}} style={styles} />
      </View>
    </View>
  );
};
