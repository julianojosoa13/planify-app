/* eslint-disable prettier/prettier */
import { View, Text, Linking, Alert } from 'react-native';
import React,  {useState} from 'react';
import auth from '@react-native-firebase/auth'
import styles from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import CheckBox from '../../../components/CheckBox';
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS } from '../../../constants/links';

function Signup({navigation}) {
  const [agree, setAgree] = useState(false)

  const onCheckBoxPress = () => {
    setAgree( value=> !value )
  }

  const onLinkPress = (url) => {
    Linking.openURL(url)
  }

  const onSubmit = () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        Alert.alert(error)
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder='Firstname' />
      <Input placeholder='Lastname' />
      <Input placeholder='Email' keyboardType="email-address"/>
      <Input placeholder='Password' secureTextEntry={true}/>
      <Input placeholder='Confirm Password' secureTextEntry={true} />

      <Button type='blue' onPress={onSubmit} >Create an account</Button>

      <Text style={styles.footerText}>
        Already Registered?
        <Text style={styles.footerLink} onPress={() => navigation.navigate('Signin')}> Sign in!</Text>
      </Text>
      <View style={styles.tos}>
        <CheckBox checked={agree} onPress={onCheckBoxPress} />
        <Text style={styles.tosText}>
          I agree to{` `}
          <Text style={styles.link} onPress={() => onLinkPress(TERMS_AND_CONDITIONS)}>Terms and Conditions </Text>
          and{` `}
          <Text style={styles.link} onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>Privacy Policy</Text> 
        </Text>
      </View>
    </View>
  );
}

export default Signup;
