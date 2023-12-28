/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../constants/colors';

const { width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24
    },
    box: {
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        padding: 22,
        marginHorizontal: 24,
        marginVertical: 72,
    },
    title: {
        color: colors.purple,
        fontSize: 16,
    },
    subtitle: {
        opacity: 0.5,
        color: colors.purple,
        fontSize: 12,
        marginTop: 8,
    }
});

export default styles;
