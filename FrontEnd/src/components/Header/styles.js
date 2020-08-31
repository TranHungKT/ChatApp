import {StyleSheet, Platform} from 'react-native';
import {Device, Color, Styles} from '@common';

export default StyleSheet.create({
  container: {
    height: Styles.headerHeight,
    backgroundColor: Color.backgroundColor,
    flexDirection: 'row',
    ...Styles.Common.ColumnCenter,
  },
  backButton: {
    flex: 0.15,
  },
  title: {
    flex: 0.6,
  },
  titleText: {
    fontSize: Styles.FontSize.big,
    fontFamily: Styles.FontFamily.LatoBold,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Color.headerTitleColor,
  },
  svgBigView: {
    flex: 0.15,
    flexDirection: 'row',
    ...Styles.Common.RowCenterBetween,
  },
  svgView: {
    flex: 0.75,
  },
});
