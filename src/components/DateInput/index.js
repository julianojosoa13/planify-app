/* eslint-disable prettier/prettier */
import {Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import styles from './styles';


const DateInput = ({value, onChange, ...props}) => {
  const [open, setOpen] = useState(false)
  console.log(value)
  const onDateOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <TouchableOpacity style={styles.outlined} onPress={onDateOpen}>
        <Image style={styles.icon} source={require('../../assets/calendar.png')}/>
        <Text style={styles.text}>{ String(value) || "Select Date ..."}</Text>
      </TouchableOpacity>
      <DatePicker 
        modal
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
