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
    ...Styles.Common.ColumnCenter,
    // marginHorizontal: Styles.margin.marginLeft
  },
  textInputView: {
    flex: 0.7,
    ...Styles.Common.ColumnCenter,
    // backgroundColor: 'blue',
  },
  textInput: {
    width: Styles.width * 0.55 - 40,
  },
  view: {
    backgroundColor: Color.headerBackgroundColor,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  functionView: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: Styles.margin.marginLeft,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
