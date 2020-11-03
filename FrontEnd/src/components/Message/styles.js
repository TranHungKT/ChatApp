import {StyleSheet} from 'react-native';
import {Color, Config, Styles} from '@common';

export default StyleSheet.create({
  container: {
    height: Styles.height - Styles.messageInputHeight - Styles.headerHeight,

    marginHorizontal: Styles.margin.marginLeft,
    backgroundColor: 'red',
  },
});

/* 
    We need to create animation for this component because when
    a message is to long, messageInput must be higher and sent this high to message,
    so the message need to scroll up with a view to being fit with 
    long message


*/
