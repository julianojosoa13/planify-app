/* eslint-disable prettier/prettier */
import { View, Text, Linking } from 'react-native';
import React,  {useState} from 'react';

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
