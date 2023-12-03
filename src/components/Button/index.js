/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, children, type}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, type === 'blue' ? styles.blueBackground : {}]}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
