import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

const Header = ({title}) => {
    return (
        <View>
            <Image source={require('../../assets/menu.png')} />
            <Text>{title}</Text>
            <View style={styles.icon}/>
        </View>
    )
}