/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../../store/tasks';
import StatusCard from '../../../components/StatusCard';

function Home() {
  const disptach = useDispatch()
  const user = useSelector(state => state.user.data)
  const tasks = useSelector(state => state.tasks.data)
  const toUpdate = useSelector(state => state.tasks.toUpdate)

  console.log("Tasks :>> ", tasks)
  console.log("User :>> ", user)
  console.log("toUpdate :>> ", toUpdate)

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId','==', user?.uid)
      .get()
      .then(querySnapshot => {
        const tasksList = []
        
        querySnapshot.forEach(documentSnapshot => {
          tasksList.push({uid: documentSnapshot.id, ...documentSnapshot.data()} || {})
        })
        disptach(setTasks(tasksList))
      })

  }, [user, toUpdate, disptach])

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Home'/>
      
      <ScrollView>
        <Title type='thin'>Daily Tasks: </Title>

        <View style={styles.row}>
          <StatusCard label={'High Priority'} count={3}/>
          <StatusCard label={'Due Deadline'} count={3} type={'error'}/>
          <StatusCard label={'Quick Win'} count={3}/>
        </View>
      </ScrollView>
      
      <PlusIcon />
    </SafeAreaView>
  );
}

export default Home;
