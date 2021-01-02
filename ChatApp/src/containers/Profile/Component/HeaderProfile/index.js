import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Camera } from '@svg';

import { Color } from '@common';
import Icon from 'react-native-vector-icons/Entypo';

export default class HeaderProfile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.backButton}>
					<Icon name='image' color={Color.activeBackgroundColor} size={30} />
				</TouchableOpacity>

				<View style={styles.title}>
					<Text style={styles.titleText}>MY PROFILE</Text>
				</View>

				<View style={styles.svgBigView}>
					<Icon
						name='camera'
						onPress={() => this.props.onPressCamera()}
						size={30}
						color={Color.activeBackgroundColor}
					/>
				</View>
			</View>
		);
	}
}
