import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {Language} from '@common';

export default class Header extends React.PureComponent {
  render() {
    const {typeOfTab} = this.props;
    let title = Language.login;
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <Icon name={'left'} size={16} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    );
  }
}
