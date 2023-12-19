/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector(state => state.user.data)
  console.log(user)

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId','==', user?.uid)
      .get()
      .then(querySnapshot => {
        console.log("Total tasks :>> ",  querySnapshot.size)
        
        querySnapshot.forEach(documentSnapshot => {
          console.log('TaskId :>> ', documentSnapshot.id, 'data :>> ', documentSnapshot.data())
        })
      })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Home'/>
      
      <ScrollView>
        <Title type='thin'>Daily Tasks: </Title>
      </ScrollView>
      
      <PlusIcon />
    </SafeAreaView>
  );
}

export default Home;
