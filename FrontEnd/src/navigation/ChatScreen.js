import React, {Component} from 'react';
import {Chat} from '@containers';

export default class ChatScreen extends Component {
  render() {
    return <Chat navigation={this.props.navigation} />;
  }
}
