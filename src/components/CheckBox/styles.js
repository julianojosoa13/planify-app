import {StyleSheet} from 'react-native'
import colors from '../../constants/colors';
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.purple,
        borderRadius: 3,
        height: 16,
        width: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerSquare: {  
        backgroundColor: colors.purple,
        height: 9,
        width: 9,
        borderRadius: 3,
    },
    checkedBox: {
        borderWidth: 2,
    }
});

export default styles;