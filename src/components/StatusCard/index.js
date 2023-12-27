import React from "react";
import {  Pressable, Text, View } from "react-native";

import getStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

const StatusCard = ({label, count, type}) => {
    const navigation = useNavigation()
    const styles = getStyles(type)

    const onPress = () => {
        navigation.navigate("AddTask")
    }

    return (
        <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.count}>{count}</Text>
        </Pressable>
    )
}

export default StatusCard;