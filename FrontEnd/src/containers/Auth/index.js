import React, {Component} from 'react';
import {Text, View, ImageBackground, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import {SwiperHandle} from '@components';
import {SvgAuth1, SvgAuth2, SvgAuth3} from '@svg';
import {Language, Styles, Images} from '@common';
import styles from './styles';
const {height, width} = Dimensions.get('window');

export default class Auth extends Component {
  render() {
    return (
      <ImageBackground source={Images.backgroundAuth} style={styles.background}>
        <Swiper style={styles.wrapper} loop={false}>
          <View style={styles.slide}>
            <SvgAuth1
              width={(width * 3) / 4}
              height={height / 2}
              style={styles.svg}
            />
            <SwiperHandle
              textDes={`${Language.splash.description1}`}
              textTitle={`${Language.splash.connect_with_friend}`}
            />
          </View>
          <View style={styles.slide}>
            <SvgAuth2
              width={(width * 3) / 4}
              height={height / 2}
              style={styles.svg}
            />
            <SwiperHandle
              textDes={`${Language.splash.description2}`}
              textTitle={`${Language.splash.get_intouch_instantly}`}
            />
          </View>
          <View style={styles.slide}>
            <SvgAuth3
              width={(width * 3) / 4}
              height={height / 2}
              style={styles.svg}
            />
            <SwiperHandle
              textDes={`${Language.splash.description3}`}
              textTitle={`${Language.splash.many_platforms_one_chat}`}
            />
          </View>
        </Swiper>
      </ImageBackground>
    );
  }
}
