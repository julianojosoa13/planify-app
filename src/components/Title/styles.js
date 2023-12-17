/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 24,
  },
  thin: {
    fontWeight: '300',
    fontSize: 24,
    color: colors.purple,
    paddingHorizontal: 24,
  }
});

export default styles;
