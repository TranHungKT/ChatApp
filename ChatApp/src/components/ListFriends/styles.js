import {StyleSheet} from 'react-native';
import {Styles, Color} from '@common';
export default StyleSheet.create({
  mainView: {
    height: Styles.height / 10,
    width: Styles.width,
    flexDirection: 'row',
    marginHorizontal: Styles.margin.marginLeft,
    marginRight: Styles.margin.marginRight,
  },
  avatarView: {
    ...Styles.Common.ColumnCenter,
  },
  itemView: {
    borderBottomWidth: 1,
    borderBottomColor: Color.seperateLineColor,
  },
});
