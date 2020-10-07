import {StyleSheet} from 'react-native';
import {Styles} from '@common';
export default StyleSheet.create({
  avatar: {
    height: Styles.avatar.height,
    width: Styles.avatar.width,
    borderRadius: (Styles.height / 10 - 20) / 2,
  },
});
