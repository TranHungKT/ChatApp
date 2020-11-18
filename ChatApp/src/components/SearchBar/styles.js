import {StyleSheet} from 'react-native';
import {Styles, Color} from '@common';

export default StyleSheet.create({
  mainView: {
    height: Styles.headerHeight,
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    ...Styles.Common.ColumnCenter,
  },
  searchView: {
    flex: 0.15,
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
    marginRight: Styles.margin.marginRight,
  },
  textInput: {
    fontSize: Styles.FontSize.medium,
    fontFamily: Styles.FontFamily.QuicksandBold,
    color: Color.searchBar.text,
    width: (Styles.width * 3) / 4,
  },
  listFriendView: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    zIndex: 99,
  },
  itemView: {
    marginHorizontal: Styles.margin.marginLeft,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 4,
    zIndex: 999,
    justifyContent: 'flex-start',
    // justifyContent: 'space-between',
  },
  itemName: {
    fontSize: Styles.FontSize.medium,
    fontFamily: Styles.FontFamily.QuicksandBold,
  },
});
