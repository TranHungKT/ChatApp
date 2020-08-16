import React, {Component} from 'react';
import {Auth} from '@containers';

export default class AuthScreen extends Component {
  render() {
    return <Auth navigation={this.props.navigation} />;
  }
}
