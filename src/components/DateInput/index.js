/* eslint-disable prettier/prettier */
import {Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import styles from './styles';
import moment from 'moment';


const DateInput = ({value, onChange, ...props}) => {
  const [open, setOpen] = useState(false)
  console.log(value)
  const onDateOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <TouchableOpacity style={styles.outlined} onPress={onDateOpen}>
        <Image resizeMode='contain' style={styles.icon} source={require('../../assets/calendar.png')}/>
        <Text style={styles.text}>{ moment(value).format('L') || "Select Date ..."}</Text>
      </TouchableOpacity>
      <DatePicker 
        modal
        mode='date'
        open={open}
        date={value}
        onCancel={() => {
          setOpen(false)
        }}
        onConfirm={(date) => {
          setOpen(false)
          onChange(date)
        }}
      />
    
    </>
  );
};

export default DateInput;
