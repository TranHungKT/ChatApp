import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Color, RouteNames } from '@common';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';

export default class HeaderProfile extends Component {
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<TouchableOpacity style={styles.backButton}></TouchableOpacity>

				<View style={styles.title}>
					<Text style={styles.titleText}>MY WALLET</Text>
				</View>

				<TouchableOpacity
					style={styles.svgBigView}
					onPress={() =>
						this.props.navigation.navigate(RouteNames.Pay, {
							balance: this.props.balance,
						})
					}
				>
					<Icon
						name='amazon-pay'
						size={30}
						color={Color.activeBackgroundColor}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
