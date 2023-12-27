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
    }
});

export default styles;
