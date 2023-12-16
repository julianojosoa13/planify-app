import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24
    },
    title: {
        color: colors.purple,
        fontSize: 16,
        fontWeight: '400'
    },
    icon: {
        width: 24,
        height: 24
    }
})