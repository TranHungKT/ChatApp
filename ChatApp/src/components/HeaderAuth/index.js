import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Logo } from '@svg';

import { Styles } from '@common';

const styles = StyleSheet.create({
	logo: {
		...Styles.Common.ColumnCenter,
	},
});

export default class HeaderAuth extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.logo}>
				<Image
					source={require('../../assets/logo.png')}
					style={{
						marginTop: 20,
						marginBottom: 20,
						height: Styles.height / 7,
						width: Styles.width / 2,
					}}
				/>
			</View>
		);
	}
}
