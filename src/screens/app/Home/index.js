/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';

function Home({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

export default Home;
