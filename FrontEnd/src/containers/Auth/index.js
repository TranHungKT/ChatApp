import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {SwiperHandle} from '@components';
import {SvgAuth1, SvgAuth2, SvgAuth3} from '@svg';
import {Language} from '@common';
var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default class Auth extends Component {
  render() {
    let array = ['Hello Swiper', 'Beautiful', 'And Simple'];
    let a = array.map((arr, key) => {
      return (
        <View testID="Hello" style={styles.slide1} key={key}>
          <Text style={styles.text}>{arr}</Text>
        </View>
      );
    });
    let svgAuth = [<SvgAuth1 />, <SvgAuth2 />, <SvgAuth3 />];
    let textTitle = [
      `${Language.splash.connect_with_friend}`,
      `${Language.splash.get_intouch_instantly}`,
      `${Language.splash.many_platforms_one_chat}`,
    ];
    let textDes = [
      `${Language.splash.description1}`,
      `${Language.splash.description2}`,
      `${Language.splash.description3}`,
    ];

    return (
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        {a}
      </Swiper>
      // <SwiperHandle svgAuth =  {svgAuth} textDes = {textDes} textTitle = {textTitle} />

      // <Swiper />
    );
  }
}
