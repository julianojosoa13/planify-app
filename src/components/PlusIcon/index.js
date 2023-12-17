import React from "react";
import {  Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const PlusIcon = () => {
    const navigation = useNavigation()
    const addTask = () => {
        navigation.navigate("AddTask")
    }

    return (
        <Pressable style={styles.container} onPress={addTask}>
            <Text style={styles.text}>+</Text>
        </Pressable>
    )
}

export default PlusIcon;