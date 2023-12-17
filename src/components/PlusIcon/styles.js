import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24,
        right: 24,
        height: 60,
        width: 60,
        backgroundColor: colors.blue,
        borderRadius: 30
    },
    text: {
        fontSize: 32,
        fontWeight: '500',
        color: colors.white,
    }
})