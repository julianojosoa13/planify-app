/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';

function Tasks({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tasks</Text>
    </SafeAreaView>
  );
}

export default Tasks;
