import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Language} from '@common';
import styles from './styles';

import Swiper from 'react-native-swiper';

export default class SwiperHandle extends React.PureComponent {
  render() {
    const {svgAuth, textDes, textTitle} = this.props;
    let swiper = svgAuth.map((svg, key) => {
      textDes.map((text_des, keyDes) => {
        textTitle.map((text_title, keyTitle) => {
          <View style={styles.slide}>
            <View style={styles.imageView}>
              <svg style={styles.svg} />
            </View>
            <View style={styles.pagination} />
            <View style={styles.textTitle} />
          </View>;
        });
      });
    });
    return <Swiper showsButtons></Swiper>;
  }
}
