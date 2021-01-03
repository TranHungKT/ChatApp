import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Color } from '@common';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';

export default class HeaderProfile extends Component {
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<TouchableOpacity style={styles.backButton}></TouchableOpacity>

				<View style={styles.title}>
					<Text style={styles.titleText}>PAY MONEY</Text>
				</View>

				<TouchableOpacity style={styles.svgBigView}></TouchableOpacity>
			</View>
		);
	}
}
