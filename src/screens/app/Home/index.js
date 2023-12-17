/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';

function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Home'/>
      
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
      
      <PlusIcon />
    </SafeAreaView>
  );
}

export default Home;
