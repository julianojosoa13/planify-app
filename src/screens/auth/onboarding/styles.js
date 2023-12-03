/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../constants/colors';

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image: {
        width: width,
        flex: 1,
    },
    content: {
        padding: 46,
    },
    title: {
        color: colors.black,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22,
      },
      subtitle: {
        color: colors.grey,
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 16
      },
});

export default styles;
