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
    marginLeft: Styles.margin.marginLeft,
    // backgroundColor: 'red',
  },
  title: {
    flex: 0.6,
    ...Styles.Common.ColumnCenterLeft,
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
    marginRight: Styles.margin.marginRight,
    ...Styles.Common.ColumnCenter,
  },
  svgView: {
    flex: 0.75,
  },
});
