/* eslint-disable prettier/prettier */
import { SafeAreaView, Text, Alert } from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth'
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';

function Signin({navigation}) {
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    console.log('some text changed ', key)
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (!values.email || !values.password || values.password.length < 8) {
      Alert.alert('Email address and password are required! Password must at least be 8 characters!')
      return 
    }
    auth().signInWithEmailAndPassword(values.email, values.password)
          .then(() => {
            console.log('User signed in')
          })
          .catch(error => {

          })
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Title>Welcome back!</Title>
        <Input onChangeText={(val)=> onChange(val, 'email')} placeholder="Email" keyboardType="email-address"/>
        <Input onChangeText={(val)=> onChange(val, 'password')} placeholder="Password" secureTextEntry={true}/>
        <Button onPress={onSubmit}>Login</Button>
        <Text style={styles.footerText}>
          Not Registered?
          <Text style={styles.footerLink} onPress={() => navigation.navigate('Signup')}> Sign up!</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signin;
