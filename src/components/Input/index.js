/* eslint-disable prettier/prettier */
import {Text, TextInput} from 'react-native';
import React from 'react';

import styles from './styles';
import colors from '../../constants/colors';

const Input = ({...props}) => {
  return (
    <TextInput style={styles.input} {...props} placeholderTextColor={colors.midGrey}/>
  );
};

export default Input;
