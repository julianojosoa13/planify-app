import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    item: {
        fontSize: 12,
        color: colors.blue,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    selectedItem: {
        color: colors.blue
    },
    itemContainer: {
        padding: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: colors.blue,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 14,
    },
    selectedItemContainer: {
        backgroundColor: colors.lightGrey,
        borderColor: colors.lightGrey,
    }
});

export default styles;
