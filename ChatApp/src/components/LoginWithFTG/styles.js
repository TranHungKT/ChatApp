import {StyleSheet} from 'react-native';
import {Styles} from '@common';
export default StyleSheet.create({
  mainView: {
    flex: 1,
  },
  textView: {
    flex: 0.4,
    ...Styles.Common.ColumnCenter,
  },
  text: {
    ...Styles.Common.textCommon,
  },
  buttonView: {
    flex: 0.6,
    marginHorizontal: 40,
    ...Styles.Common.RowCenterBetween,
  },
});
