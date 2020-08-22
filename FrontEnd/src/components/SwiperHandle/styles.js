import {StyleSheet} from 'react-native';
import {Color, Styles} from '@common';

export default StyleSheet.create({
  titleView: {
    flex: 0.15,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textTitle: {
    fontFamily: Styles.FontFamily.QuicksandRegular,
    fontSize: Styles.FontSize.xxbig,
    fontWeight: 'bold',
  },
  desView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  textDes: {
    fontFamily: Styles.FontFamily.QuicksandRegular,
    fontSize: Styles.FontSize.big,
    textAlign: 'center',
  },
});
