import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {Language, Color} from '@common';

import {RectButton} from 'react-native-gesture-handler';

const Row = ({item}) => <RectButton style={styles.rectButton}></RectButton>;

class GroupDevice extends React.PureComponent {
  render() {
    return <Text>Hello</Text>;
  }
}

const styles = StyleSheet.create({});

export default GroupDevice;
