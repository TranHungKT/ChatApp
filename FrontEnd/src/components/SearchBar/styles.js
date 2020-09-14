import {StyleSheet} from 'react-native';
import {Styles, Color} from '@common';

export default StyleSheet.create({
  mainView: {
    height: Styles.headerHeight,
    backgroundColor: Color.backgroundColor,
    flexDirection: 'row',
    ...Styles.Common.ColumnCenter,
  },
  searchView: {
    flex: 0.15,
    // backgroundColor: 'red',
    marginLeft: Styles.margin.marginLeft,
  },
  cursorView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInputView: {
    flex: 0.75,
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginRight: Styles.margin.marginRight,
  },
  textInput: {
    fontSize: Styles.FontSize.medium,
    fontFamily: Styles.FontFamily.QuicksandBold,
    color: Color.searchBar.text,
    width: (Styles.width * 3) / 4,
  },
});
