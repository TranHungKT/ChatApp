import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import StatusComponent from '../StatusComponent';
export default class ListRecentChats extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.avatarView}>
          <AvatarComponent />
        </View>
        <StatusComponent />
      </View>
    );
  }
}
