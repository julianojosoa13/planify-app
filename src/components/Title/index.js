/* eslint-disable prettier/prettier */
import {Text} from 'react-native';
import React from 'react';

import styles from './styles';

const Title = ({children}) => {
  return (
    <Text style={styles.title}>
        {children}
    </Text>
  );
};

export default Title;
