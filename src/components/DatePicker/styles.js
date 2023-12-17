/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  outlined: {
    borderRadius: 10,
    marginVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: 24,
  },
  text: {
    color: colors.black,
    fontSize: 15,
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default styles;
