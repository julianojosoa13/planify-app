/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';

function Onboarding({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <Image
          style={styles.image}
          source={require('../../../assets/avi-richards-Z3ownETsdNQ-unsplash-1.png')}
        />
        <View style={styles.footer}/>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Best Task Management app</Text>
        <Text style={styles.subtitle}>Get organized by sorting out all your tasks and boost your productivity.</Text>
        <Button onPress={() => navigation.navigate('Login')}>Log in</Button>
        <Button type="blue" onPress={() => navigation.navigate('Signup')}>Get started</Button>
      </View>
    </View>
  );
}

export default Onboarding;
