import {StyleSheet} from 'react-native';
import {Styles} from '@common';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    marginHorizontal: 40,
  },
  inputView: {
    flex: 0.3,
  },
  remmemberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    ...Styles.Common.textCommon,
  },
  switch: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
  },
  buttonView: {
    flex: 0.35,
    ...Styles.Common.ColumnCenterBottom,
  },
  button: {
    width: Styles.width - 80,
  },
  FTGview: {
    flex: 0.2,
    ...Styles.Common.ColumnCenterBottom,
  },
  signupView: {
    flex: 0.1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
