import {StyleSheet} from 'react-native';
import {Styles, Color} from '@common';
export default StyleSheet.create({
  mainView: {
    height: Styles.height / 10,
    width: Styles.width,
    flexDirection: 'row',
    marginLeft: Styles.margin.marginLeft,
    marginRight: Styles.margin.marginRight,
  },
  avatarView: {
    ...Styles.Common.ColumnCenter,
  },
});
