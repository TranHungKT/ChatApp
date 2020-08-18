import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import Svg1 from '../../assets/Splash/Splash1/01.svg';
import {SvgAuth1} from '@svg';
export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const Svg1 =
    return (
      <View>
        {/* <Svg1 width={200} height={200} /> */}
        <SvgAuth1 width={200} height={200} />
      </View>
    );
  }
}
