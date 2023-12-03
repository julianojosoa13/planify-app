/* eslint-disable prettier/prettier */
import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';

function Onboarding() {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/avi-richards-Z3ownETsdNQ-unsplash-1.png')}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Best Task Management app</Text>
        <Text style={styles.subtitle}>Get organized by sorting out all your tasks and boost your productivity.</Text>
        <Button>Log in</Button>
        <Button>Get started</Button>
      </View>
    </View>
  );
}

export default Onboarding;
