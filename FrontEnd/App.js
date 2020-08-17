import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/navigation/index';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <Router />;
  }
}
