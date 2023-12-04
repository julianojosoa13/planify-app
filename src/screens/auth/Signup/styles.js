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
        flexDirection: 'row',
        marginVertical: 20,
    },
    tosText: {
        marginLeft: 4,
    },
    innerSquare: {  
        backgroundColor: colors.purple,
        height: 9,
        width: 9,
        borderRadius: 3,
    },
});

export default styles;
