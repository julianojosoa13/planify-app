/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, Pressable } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

function AddTask({navigation}) {
  const onPress = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} onPress={onPress} hitSlop={8}>
        <Image source={require("../../../assets/backIcon.png")} style={styles.backIcon}/>
      </Pressable>
      <Title type='thin'>Add New Task</Title>
      <Input placeholder='Type here...' outlined={true}/>
    </SafeAreaView>
  );
}

export default AddTask;
