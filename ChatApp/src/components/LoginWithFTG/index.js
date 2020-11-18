import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Facebook, Twitter, Google} from '@svg';
import styles from './styles';
const LoginWithFTG = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.textView}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.buttonView}>
        <Facebook />
        <Twitter />
        <Google />
      </View>
    </View>
  );
};

export default LoginWithFTG;
