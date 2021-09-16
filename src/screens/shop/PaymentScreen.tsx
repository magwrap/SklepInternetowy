import {Button} from '@/components/Button';
import {InputField} from '@/components/InputField/InputField';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

interface PaymentProps {
  navigation: any;
}

export const Payment: React.FC<PaymentProps> = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [viewWarnings, setViewWarnings] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Your data</Text>
        <InputField
          name={'first name'}
          prop={firstName}
          setProp={setFirstName}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={'last name'}
          prop={lastName}
          setProp={setLastName}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={'email'}
          prop={email}
          setProp={setEmail}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={'postcode'}
          prop={postcode}
          setProp={setPostcode}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={'adress'}
          prop={adress}
          setProp={setAdress}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={'city'}
          prop={city}
          setProp={setCity}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={'phone'}
          prop={phone}
          setProp={setPhone}
          viewWarnings={viewWarnings}
        />
        <Button
          text="next step"
          onPress={() => {
            if (
              firstName
              // &&
              // lastName &&
              // email &&
              // postcode &&
              // adress &&
              // city &&
              // phone
            ) {
              navigation.navigate('DeliveryAndPay');
            } else {
              setViewWarnings(true);
            }
          }}
          style={styles}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
