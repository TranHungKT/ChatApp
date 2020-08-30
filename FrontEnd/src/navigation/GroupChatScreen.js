import React, {Component} from 'react';
import {GroupChat} from '@containers';

export default class GroupChatScreen extends Component {
  render() {
    return <GroupChat navigation={this.props.navigation} />;
  }
}
