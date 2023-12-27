/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore'

import styles from './styles';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '../../../components/CheckBox';
import { setToUpdate } from '../../../store/tasks';
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';


function Tasks() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.data)
  const [selectedItem, setSelectedItem] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState()

  useEffect(()=> {
    if(selectedItem && selectedItem !== 'all') {
      const filtered = tasks?.filter(task => task.category === selectedItem)
      setFilteredTasks(filtered)
    } else {
      setFilteredTasks(tasks)
    }
  }, [selectedItem, tasks])

  const onTaskUpdate = (item) => {
    firestore()
      .collection('Tasks')
      .doc(item?.uid)
      .update({
        checked: !item?.checked
      })
      .then(() => {
        dispatch(setToUpdate())
      })
  }

  const renderTasks = (item) => {
    return (
      <View style={styles.row}>
        <CheckBox checked={item?.checked} onPress={() => onTaskUpdate(item)} />
        <Text style={[styles.taskText, item?.checked ? styles.checked: {}]}>{item.title}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Tasks'}/>
      
      <FlatList 
        data={filteredTasks}
        keyExtractor={(item) => String(item.uid)}
        renderItem={({item}) => renderTasks(item)}
        ListHeaderComponent={
          <View style={styles.header}>
            <Title type='thin'>To Do Tasks:</Title>
            <Categories categories={[{label: 'All', value: 'all'}, ...categories]} selectedCategory={selectedItem} onCategoryPress={setSelectedItem}/>
          </View>
        }
      />

      <PlusIcon />
    </SafeAreaView>
  );
}

export default Tasks;
