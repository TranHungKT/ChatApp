import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { InfoIcon, BackIcon } from '@svg';

export default class HeaderProfile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.backButton}>
					<BackIcon height={24} width={24} />
				</View>

				<View style={styles.title}>
					<Text style={styles.titleText}>MY PROFILE</Text>
				</View>

				<View style={styles.svgBigView}>
					<InfoIcon />
				</View>
			</View>
		);
	}
}
