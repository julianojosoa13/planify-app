/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  outlined: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 12,
    padding: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: 24,
    alignItems: 'center'
  },
  text: {
    color: colors.grey,
    fontSize: 15,
    marginLeft: 8,
  },
  icon: {
    width: 18,
    height: 18
  }
});

export default styles;
