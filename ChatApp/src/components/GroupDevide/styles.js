import {StyleSheet} from 'react-native';
import {Styles, Color} from '@common';

export default StyleSheet.create({
  mainView: {
    height: Styles.headerHeight,
    width: Styles.width,
    backgroundColor: Color.groupDevice.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 0,
  },
  text: {
    fontSize: Styles.FontSize.medium,
    color: Color.groupDevice.text,
    fontFamily: Styles.FontFamily.QuicksandBold,
    marginLeft: Styles.margin.marginLeft,
  },
});
