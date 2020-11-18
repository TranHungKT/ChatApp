import React, {Component} from 'react';
import {Login} from '@containers';

export default class AuthScreen extends Component {
  render() {
    return <Login navigation={this.props.navigation} />;
  }
}
