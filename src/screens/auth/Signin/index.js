/* eslint-disable prettier/prettier */
import { SafeAreaView, Text } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

function Signin({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button>Login</Button>
      <Text style={styles.footerText}>
          Not Registered?
          <Text style={styles.footerLink} onPress={() => navigation.navigate('Signup')}> Sign up!</Text>
        </Text>
    </SafeAreaView>
  );
}

export default Signin;
