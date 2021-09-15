import React, {useState} from 'react';
import {Text} from '@/components/atoms';
import {TouchableOpacity, View, TextInput} from 'react-native';

import {AppContainer} from '@/components/ui/AppContainer';
import {styles} from './styles';

interface RegistrationProps {
  navigation: any;
}

export const Register: React.FC<RegistrationProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.fields}>
          <Text style={[styles.text, styles.header]}>Registration Screen</Text>
          <View style={styles.inputField}>
            <Text style={styles.label}>Email :</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Insert your email"
            />
          </View>
          <View style={styles.inputField}>
            <Text style={styles.label}>Password :</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Insert your password"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputField}>
            <Text style={styles.label}>Confirm Password :</Text>
            <TextInput
              style={styles.input}
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              placeholder="Confirm your password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.text}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
};
