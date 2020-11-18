import {StyleSheet} from 'react-native';
import {Color, Config, Styles} from '@common';

export default StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1,
  },
  messageBox: {
    borderRadius: 35,
    padding: 15,
    width: (Styles.width * 2) / 3,
  },
  myMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    alignSelf: 'flex-end',
    color: 'grey',
    fontSize: 10,
  },
  message: {
    flex: 0.9,
    flexDirection: 'column',
    fontSize: Styles.message.textMessageFontSize,
    fontFamily: Styles.message.textMessageFontFamily,
    color: Color.message.textColor,
  },
  avatar: {},
});
