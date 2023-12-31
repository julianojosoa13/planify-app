/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, Pressable, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import Button from '../../../components/Button';

import { categories } from '../../../constants/categories';
import DateInput from '../../../components/DateInput';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { setToUpdate } from '../../../store/tasks';
import { useDispatch } from 'react-redux';

function AddTask({navigation}) {
  const dispatch = useDispatch()
  const [selectedItem, setSelectedItem] = useState()
  const [date, setDate] = useState(new Date())
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const user = useSelector(state => state.user.data)

  console.log(title)

  const onSubmit = () => {
    const today = moment(new Date()).format("YYYY-MM-DD")
    const deadline = moment(date).format("YYYY-MM-DD")
    if(!title) {
      Alert.alert("Add Task","Please enter the Task title!")
      return
    }

    if (moment(deadline).isBefore(today)) {
      Alert.alert("Add Task", 'The deadline must be a date in the future!')
      return
    }

    setLoading(true)

    firestore()
      .collection('Tasks')
      .add({
        title,
        deadline,
        category: selectedItem || null,
        userId: user.uid,
        checked: false,
      })
      .then(() => {
        setLoading(false)
        console.log('Task added!');
        setDate(new Date)
        setTitle('')
        setSelectedItem('')
        dispatch(setToUpdate())
        navigation.navigate('Tasks')
      }).catch(e => {
        console.log("error :>> ", e)
        setLoading(false)
        Alert.alert(error.message)
      });

  }

  const onPress = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} onPress={onPress} hitSlop={8}>
        <Image source={require("../../../assets/backIcon.png")} style={styles.backIcon}/>
      </Pressable>
      <ScrollView>
        <Title type='thin'>Add New Task</Title>

        <Text style={styles.label}>Describe the task</Text>
        <Input placeholder='Type here...' outlined={true} value={title} onChangeText={setTitle}/>

        <Text style={styles.label}>Type</Text>
        <Categories categories={categories} selectedCategory={selectedItem} onCategoryPress={setSelectedItem}/>
      
        <Text style={styles.label}>Deadline</Text>
        <DateInput value={date} onChange={setDate}/>

        {loading? 
            <ActivityIndicator size={'large'}/> : 
            <Button type='blue' style={styles.button} onPress={onSubmit}>Add The Task</Button>
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddTask;
