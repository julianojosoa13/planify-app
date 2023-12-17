/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../constants/colors';

const { width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        
    },
    backContainer: {
        padding: 24
    },
    backIcon: {
        width: 32,
        height: 32
    },
    label: {
        color: colors.black,
        fontSize: 12,
        marginHorizontal: 24,
        marginTop: 12,
        fontWeight: '500',
    },
    button: {
        margin: 24
    }
});

export default styles;
