import React, { Component } from 'react';
import { Profile } from '@containers';

export default class GroupChatScreen extends Component {
	render() {
		return <Profile navigation={this.props.navigation} />;
	}
}
