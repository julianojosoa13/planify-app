/* eslint-disable prettier/prettier */
import {Text, TextInput} from 'react-native';
import React from 'react';

import styles from './styles';
import colors from '../../constants/colors';

const Input = ({outlined, ...props}) => {
  return (
    <TextInput 
      style={[styles.input, outlined? styles.outlined : {}]} 
      placeholderTextColor={colors.midGrey}
      {...props} 
    />
  );
};

export default Input;
