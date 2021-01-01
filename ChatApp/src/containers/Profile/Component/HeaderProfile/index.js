import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { Camera, BackIcon } from '@svg';

export default class HeaderProfile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.backButton}></View>

				<View style={styles.title}>
					<Text style={styles.titleText}>MY PROFILE</Text>
				</View>

				<View style={styles.svgBigView}>
					<Camera onPress={() => this.props.onPressCamera()} />
				</View>
			</View>
		);
	}
}
