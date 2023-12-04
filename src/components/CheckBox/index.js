//import liraries
import React from 'react';
import { View, Pressable, Text } from 'react-native';

import styles from './styles';

// create a component
const CheckBox = ({checked, onPress}) => {
    return (
        <Pressable style={[styles.container, checked? styles.checkedBox: null]} onPress={onPress}>
            {  checked ? <View style={styles.innerSquare} /> : null}
        </Pressable>
    );
};


//make this component available to the app
export default CheckBox;
