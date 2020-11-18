import {StyleSheet} from 'react-native';
import {Styles} from '@common';
export default StyleSheet.create({
  avatar: {
    height: Styles.avatar.height,
    width: Styles.avatar.width,
    borderRadius: (Styles.height / 10 - 20) / 2,
  },
  smallAvatar: {
    height: Styles.avatar.height / 1.5,
    width: Styles.avatar.width / 1.5,
    borderRadius: (Styles.height / 10 - 20) / 3,
  },
});
