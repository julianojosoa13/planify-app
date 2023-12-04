/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';

function Signup({navigation}) {

  return (
    <View style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder='Firstname' />
      <Input placeholder='Lastname' />
      <Input placeholder='Email' />
      <Input placeholder='Password' secureTextEntry={true}/>
      <Input placeholder='Confirm Password' secureTextEntry={true} />

      <Button type='blue' >Create an account</Button>

      <Text style={styles.footerText}>
        Already Registered?
        <Text style={styles.footerLink} onPress={() => navigation.navigate('Signin')}> Sign in!</Text>
      </Text>
    </View>
  );
}

export default Signup;
