import React, { Component } from 'react';
import { Wallet } from '@containers';

export default class WalletScreen extends Component {
	render() {
		return <Wallet navigation={this.props.navigation} />;
	}
}
