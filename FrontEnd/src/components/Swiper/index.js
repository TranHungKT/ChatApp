import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Language} from '@common';
import styles from './styles';

import Swiper from 'react-native-swiper';



export default class Swiper extends React.PureComponent {
  render() {
    return (
      <Swiper showsButtons>
        <View style={styles.slide}>
          <View style={styles.imageView}></View>
        </View>
      </Swiper>
    );
  }
}
