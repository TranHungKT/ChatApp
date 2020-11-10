import {StyleSheet} from 'react-native';
import {Styles, Color} from '@common';
export default StyleSheet.create({
  mainView: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: Styles.margin.marginLeft,
    justifyContent: 'space-between',
  },
  textTitle: {
    fontFamily: Styles.FontFamily.QuicksandMedium,
    fontSize: Styles.FontSize.big,
    color: Color.statusComponent.title,
  },
  lastMessage: {
    fontSize: Styles.FontSize.medium,
    fontFamily: Styles.FontFamily.QuicksandMedium,
    color: Color.statusComponent.lastMessageRead,
    paddingLeft: 5,
  },
  status: {
    color: Color.statusComponent.statusRead,
    textAlign: 'center',
    alignSelf: 'center',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Styles.width - Styles.avatar.width - Styles.margin.marginLeft * 3,
    flex: 1,
  },
  time: {
    fontSize: Styles.FontSize.medium,
    fontFamily: Styles.FontFamily.QuicksandMedium,
    color: Color.statusComponent.lastMessageRead,
  },
});
