import {StyleSheet} from 'react-native';
import {Config, Color, Styles} from '@common';

export default StyleSheet.create({
  container: {
    width: Styles.width,
    backgroundColor: Color.inputMessageBackgroundColor,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  moreButtonView: {
    flex: 0.1,
    marginLeft: Styles.margin.marginLeft,
    ...Styles.Common.ColumnCenterLeft,
    // backgroundColor: 'red',
  },
  textInputView: {
    flex: 0.6,
    ...Styles.Common.ColumnCenter,
  },
  textInput: {
    width: Styles.width * 0.45,
  },
  view: {
    backgroundColor: Color.headerBackgroundColor,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
