import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
export default class GroupDevice extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}
