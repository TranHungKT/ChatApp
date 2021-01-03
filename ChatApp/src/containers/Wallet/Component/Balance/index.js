import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { balance, admin } = this.props;
		const { image, userName } = admin;
		return (
			<View style={this.props.style}>
				<Image
					source={{
						uri: image,
					}}
					style={styles.image}
				/>

				<Text style={styles.userName}>{userName}</Text>
				<Text style={styles.balance}>Balance: {balance}$</Text>
			</View>
		);
	}
}
