/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';

function Tasks() {

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Tasks'}/>
      
      <ScrollView>
        <Text>Tasks</Text>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
}

export default Tasks;
