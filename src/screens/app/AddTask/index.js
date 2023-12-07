/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';

function AddTask({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <Text>AddTask</Text>
    </SafeAreaView>
  );
}

export default AddTask;
