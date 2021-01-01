import React, { Component } from 'react';
import { FriendProfile } from '@containers';

export default class GroupChatScreen extends Component {
	render() {
		return <FriendProfile navigation={this.props.navigation} />;
	}
}
