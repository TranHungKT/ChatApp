import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Camera } from '@svg';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Color } from '@common';

import styles from './styles';

export default class HeaderProfile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.backButton}>
					<Icon name='qrcode' color={'black'} size={30} />
				</View>

				<View style={styles.title}>
					<Text style={styles.titleText}></Text>
				</View>

				<View style={styles.svgBigView}>
					<Camera onPress={() => this.props.onPressCamera()} />
				</View>
			</View>
		);
	}
}
