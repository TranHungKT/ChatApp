import {StyleSheet} from 'react-native';
import {Color, Config, Styles} from '@common';

export default StyleSheet.create({
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
    alignSelf: 'center',
  },
});
