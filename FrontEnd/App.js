import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {Provider} from 'react-redux';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
