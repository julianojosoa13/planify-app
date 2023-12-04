/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 24,
    },
    flex1: {
        flex: 1,
    },
    footerText: {
        color: colors.grey,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 28,
    },
    footerLink: {
        color: colors.purple,
        fontWeight: 'bold',
    },
    tos: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 16,
    },
    tosText: {
        marginLeft: 8,
        color: colors.grey,
        fontSize: 12,
    },
    link: {
        textDecorationLine: 'underline',
    }
});

export default styles;
