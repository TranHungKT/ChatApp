import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/navigation/index';
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
