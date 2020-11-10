import {StyleSheet} from 'react-native';
import {Color, Config, Styles} from '@common';

export default StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  messageBox: {
    borderRadius: 35,
    padding: 15,
  },
  myMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
  message: {
    flex: 0.9,
  },
});
