import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Header = ({title}) => {
    const navigation = useNavigation()
    const openDrawer = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={openDrawer} hitSlop={8}>
                <Image source={require('../../assets/menu.png')} style={styles.icon} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.icon}/>
        </View>
    )
}

export default Header;