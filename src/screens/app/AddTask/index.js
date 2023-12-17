/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, Pressable } from 'react-native';
import React, { useState } from 'react';

import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';

import { categories } from '../../../constants/categories';
import DateInput from '../../../components/DateInput';

function AddTask({navigation}) {
  const [selectedItem, setSelectedItem] = useState()
  const [date, setDate] = useState(new Date())

  const onPress = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} onPress={onPress} hitSlop={8}>
        <Image source={require("../../../assets/backIcon.png")} style={styles.backIcon}/>
      </Pressable>
      <Title type='thin'>Add New Task</Title>

      <Text style={styles.label}>Describe the task</Text>
      <Input placeholder='Type here...' outlined={true}/>

      <Text style={styles.label}>Type</Text>
      <Categories categories={categories} selectedCategory={selectedItem} onCategoryPress={setSelectedItem}/>
    
      <Text style={styles.label}>Deadline</Text>
      <DateInput value={date} onChange={setDate}/>
    </SafeAreaView>
  );
}

export default AddTask;
