/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../../components/Button';

function Signup() {

  return (
    <View style={styles.container}>
      <Button>Create an account</Button>
    </View>
  );
}

export default Signup;
