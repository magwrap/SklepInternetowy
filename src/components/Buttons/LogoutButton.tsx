import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text} from '@/components/atoms';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {texts} from '@/config/Texts';
import {useAuthContext} from '@/hooks/AuthProvider';

interface LogoutButtonProps {}

export const LogoutButton: React.FC<LogoutButtonProps> = ({}) => {
  const {logout} = useAuthContext();
  return (
    <TouchableOpacity onPress={() => logout()} style={styles.button}>
      <MaterialIcons name="logout" size={27} color={'black'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
  },
});
