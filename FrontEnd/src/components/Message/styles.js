import {StyleSheet} from 'react-native';
import {Color, Config, Styles} from '@common';

export default StyleSheet.create({
  container: {
    height: Styles.height - Styles.messageInputHeight - Styles.headerHeight,
    marginHorizontal: Styles.margin.marginLeft,
    backgroundColor: 'white',
  },
  typingMainView: {
    backgroundColor: '#BCB9B8',
    width: Styles.width / 2,
    height: 20,
    position: 'absolute',
    bottom: 0,
    left: Styles.margin.marginLeft,
    borderRadius: 45,
    ...Styles.Common.ColumnCenter,
  },
  textIsTyping: {
    color: 'red',
    fontSize: 10,
  },
});

/* 
    We need to create animation for this component because when
    a message is to long, messageInput must be higher and sent this high to message,
    so the message need to scroll up with a view to being fit with 
    long message


*/
