/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Home'/>
    </SafeAreaView>
  );
}

export default Home;
