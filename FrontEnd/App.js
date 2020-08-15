import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
