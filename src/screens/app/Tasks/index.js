/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React from 'react';

import styles from './styles';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import { useSelector } from 'react-redux';
import CheckBox from '../../../components/CheckBox';

function Tasks() {
  const tasks = useSelector(state => state.tasks.data)

  const renderTasks = (item) => {
    return (
      <View style={styles.row}>
        <CheckBox checked={item.checked} />
        <Text style={styles.taskText}>{item.title}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Tasks'}/>
      
      <FlatList 
        data={tasks}
        keyExtractor={(item) => String(item.uid)}
        renderItem={({item}) => renderTasks(item)}
        ListHeaderComponent={<Title type='thin'>To Do Tasks:</Title>}
      />

      <PlusIcon />
    </SafeAreaView>
  );
}

export default Tasks;
