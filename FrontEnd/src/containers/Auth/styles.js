import {StyleSheet, Dimensions} from 'react-native';
import {Color, Styles} from '@common';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontFamily: Styles.FontFamily.QuicksandSemiBold,
    flex: 0.5,
    backgroundColor: 'blue',
  },
  svg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
