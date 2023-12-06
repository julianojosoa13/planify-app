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
import { ScrollView } from 'react-native-gesture-handler';

function Signup({navigation}) {
  const [agree, setAgree] = useState(false);
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    console.log('some text changed ', key)
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onCheckBoxPress = () => {
    setAgree( value=> !value )
  };

  const onLinkPress = (url) => {
    Linking.openURL(url)
  };

  console.log('Values :>> ', values)

  const onSubmit = () => {
    if (values.password !== values.confirm_password) {
      Alert.alert('Password do not match');
      return;
    }
    if(!agree) {
      Alert.alert('You need to accept the Terms & Conditions before creation your account!');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Join the hub!</Title>
        <Input onChangeText={(val)=> onChange(val, 'firstname')} placeholder='Firstname' />
        <Input onChangeText={(val)=> onChange(val, 'lastname')} placeholder='Lastname' />
        <Input onChangeText={(val)=> onChange(val, 'email')} placeholder='Email' keyboardType="email-address"/>
        <Input onChangeText={(val)=> onChange(val, 'password')} placeholder='Password' secureTextEntry={true}/>
        <Input onChangeText={(val)=> onChange(val, 'confirm_password')} placeholder='Confirm Password' secureTextEntry={true} />

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
      </ScrollView>
    </View>
  );
}

export default Signup;
