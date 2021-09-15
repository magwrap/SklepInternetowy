import React, {useState} from 'react';
import {Text} from '@/components/atoms';
import {TouchableOpacity, View, TextInput} from 'react-native';

import {AppContainer} from '@/components/ui/AppContainer';
import {useAuthContext} from '@/hooks/AuthProvider';

import {styles} from './styles';

interface LoginProps {
  navigation: any;
}

export const Login: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useAuthContext();
  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.fields}>
          <Text style={[styles.text, styles.header]}>Login Screen</Text>

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
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => login()} style={styles.button}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.button}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
};
