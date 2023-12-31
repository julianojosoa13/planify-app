/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../constants/colors';

const { width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    flex1: {
        flex: 1,
    },
    image: {
        width: width,
        flex: 1,
    },
    content: {
        padding: 46,
        paddingTop: 0,
        backgroundColor: colors.white,
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
        marginVertical: 16,
      },
      footer: {
        height: 50,
        width: '100%',
        backgroundColor: colors.white,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      footerText: {

      },
      footerLink: {

      },
});

export default styles;
