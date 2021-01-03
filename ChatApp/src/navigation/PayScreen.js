import React, { Component } from 'react';
import { Pay } from '@containers';

export default class PayScreen extends Component {
	render() {
		return <Pay navigation={this.props.navigation} />;
	}
}
