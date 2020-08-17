import {StyleSheet, Platform} from 'react-native';
import {Device, Color, Styles} from '@common';

export default StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: Color.backgroundColor,
  },
  backButton: {
    flex: 0.2,
  },
  title: {
    flex: 0.5,
  },
  titleText: {
    fontSize: Styles.FontSize.big,
    fontFamily: Styles.FontFamily.LatoBold,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
