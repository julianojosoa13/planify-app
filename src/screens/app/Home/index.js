/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore'
import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../../store/tasks';
import StatusCard from '../../../components/StatusCard';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation()
  const disptach = useDispatch()
  const user = useSelector(state => state.user.data)
  const tasks = useSelector(state => state.tasks.data)
  const toUpdate = useSelector(state => state.tasks.toUpdate)
  const [counts, setCounts] = useState()

  console.log("Tasks :>> ", tasks)
  console.log("User :>> ", user)
  console.log("toUpdate :>> ", toUpdate)

  const navigateToTasks = () => {
    navigation.navigate('Tasks')
  }

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

  useEffect(()=> {
    if (tasks?.length) {
      const highPriority = tasks?.filter(
        task => task?.category === "urgent" || task?.category === "important"
      )

      const today = moment(new Date()).format('YYYY-MM-DD')
      
      const dueDate = tasks?.filter(
        task => !task?.checked && moment(task?.deadline).isBefore(today)
      )

      const quickWin = tasks?.filter(
        task => task?.category === 'quick_task'
      )

      setCounts({
        highPriority: highPriority?.length,
        dueDeadline: dueDate?.length,
        quickWin: quickWin?.length,
      })
    }
  }, [tasks])

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Home'/>
      
      <ScrollView>
        <Title type='thin'>Daily Tasks: </Title>

        <View style={styles.row}>
          <StatusCard label={'High Priority'} count={counts?.highPriority}/>
          <StatusCard label={'Due Deadlines'} count={counts?.dueDeadline} type={'error'}/>
          <StatusCard label={'Quick Win'} count={counts?.quickWin}/>
        </View>

        <TouchableOpacity style={styles.box} onPress={navigateToTasks}>
          <Text style={styles.title}>Check all my Tasks</Text>
          <Text style={styles.subtitle}>See all tasks and filter them by categories you have selected when creating them</Text>
        </TouchableOpacity>

      </ScrollView>
      
      <PlusIcon />
    </SafeAreaView>
  );
}

export default Home;
