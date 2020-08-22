import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Language} from '@common';
import styles from './styles';

import Swiper from 'react-native-swiper';

export default class SwiperHandle extends React.PureComponent {
  render() {
    const {textDes, textTitle} = this.props;
    return (
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          <Text style={styles.textTitle}>{textTitle}</Text>
        </View>
        <View style={styles.desView}>
          <Text style={styles.textDes}>{textDes}</Text>
        </View>
        <View style={styles.buttonView}>
          <ButtonComponents title={'Sign up'} />
          <ButtonComponents title={'Login'} />
        </View>
      </View>
    );
  }
}

class ButtonComponents extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity style={styles.buttonShort}>
        <Text style={styles.textButtonShort}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
