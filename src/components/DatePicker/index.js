/* eslint-disable prettier/prettier */
import {Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';
import colors from '../../constants/colors';


const DatePicker = ({value, ...props}) => {
  const onDateOpen = () => {

  }
  return (
   <TouchableOpacity style={styles.outlined} onPress={onDateOpen}>
    <Image style={styles.icon} source={require('../../assets/calendar.png')}/>
    <Text style={styles.text}>{value || "Select Date ..."}</Text>
   </TouchableOpacity>
  );
};

export default DatePicker;
