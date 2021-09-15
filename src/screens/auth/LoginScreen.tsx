import React, {useState} from 'react';
import {Text} from '@/components/atoms';
import {TouchableOpacity, View, TextInput} from 'react-native';

import {AppContainer} from '@/components/ui/AppContainer';
import {useAuthContext} from '@/hooks/AuthProvider';

import {styles} from './styles';
import {WarningText, warningBorderColor} from '@/components/warnings/Warnings';
import {InputField} from '@/components/InputField/InputField';

interface LoginProps {
  navigation: any;
}

export const Login: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewWarnings, setViewWarnings] = useState(false);

  const {login} = useAuthContext();
  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.fields}>
          <Text style={[styles.text, styles.header]}>Login Screen</Text>

          <InputField
            name="email"
            prop={email}
            setProp={setEmail}
            viewWarnings={viewWarnings}
          />
          <InputField
            name="password"
            prop={password}
            setProp={setPassword}
            viewWarnings={viewWarnings}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              if (email && password) {
                login();
              } else {
                setViewWarnings(true);
              }
            }}
            style={styles.button}>
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
