import {StyleSheet} from 'react-native';
import {Color, Styles} from '@common';

export default StyleSheet.create({
  mainView: {
    flex: 1,
  },
  titleView: {
    flex: 0.2,
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
  buttonView: {
    flex: 0.4,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonShort: {
    ...Styles.Common.buttonShort,
  },
  textButtonShort: {
    ...Styles.Common.textButtonShort,
  },
});
