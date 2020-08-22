import {StyleSheet, Dimensions} from 'react-native';
import {Color, Styles} from '@common';

export default StyleSheet.create({
  background: {
    width: Styles.width,
    height: Styles.height,
  },
  slide: {
    ...Styles.Common.ColumnCenter,
    flex: 1,
  },
  svg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  pagination: {
    flex: 0.1,
    ...Styles.Common.ColumnCenter,
  },
});
