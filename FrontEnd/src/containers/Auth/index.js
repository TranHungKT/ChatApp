import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import {SwiperHandle} from '@components';
import {
  SvgAuth1,
  SvgAuth2,
  SvgAuth3,
  Pagination1,
  Pagination2,
  Pagination3,
} from '@svg';
import {Language, Styles, Images} from '@common';
import styles from './styles';

export default class Auth extends Component {
  render() {
    return (
      <ImageBackground source={Images.backgroundAuth} style={styles.background}>
        <Swiper style={styles.wrapper} loop={false} showsPagination={false}>
          <View style={styles.slide}>
            <SvgAuth1
              width={(Styles.width * 3) / 4}
              height={(Styles.height * 5) / 10}
              style={styles.svg}
            />
            <Pagination1
              width={(Styles.width * 2) / 4}
              height={(Styles.height * 1) / 10}
              style={styles.pagination}
            />
            <SwiperHandle
              style={{flex: 0.4}}
              textDes={`${Language.splash.description1}`}
              textTitle={`${Language.splash.connect_with_friend}`}
            />
          </View>
          <View style={styles.slide}>
            <SvgAuth2
              width={(Styles.width * 3) / 4}
              height={(Styles.height * 5) / 10}
              style={styles.svg}
            />
            <Pagination2
              width={(Styles.width * 2) / 4}
              height={(Styles.height * 1) / 10}
              style={styles.pagination}
            />
            <SwiperHandle
              style={{flex: 0.4}}
              textDes={`${Language.splash.description2}`}
              textTitle={`${Language.splash.get_intouch_instantly}`}
            />
          </View>
          <View style={styles.slide}>
            <SvgAuth3
              width={(Styles.width * 3) / 4}
              height={(Styles.height * 5) / 10}
              style={styles.svg}
            />
            <Pagination3
              width={(Styles.width * 2) / 4}
              height={(Styles.height * 1) / 10}
              style={styles.pagination}
            />
            <SwiperHandle
              style={{flex: 0.4}}
              textDes={`${Language.splash.description3}`}
              textTitle={`${Language.splash.many_platforms_one_chat}`}
            />
          </View>
        </Swiper>
      </ImageBackground>
    );
  }
}
