import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import Header from './Component/Header';

import styles from './styles';
export default class Pay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: '',
			amount: '',
		};
	}

	onChangeUserId = (userId) => {
		this.setState({ userId: userId });
	};

	onChangeAmount = (amount) => {
		this.setState({ amount: amount });
	};
	render() {
		const { balance } = this.props.navigation.state.params;
		const { userId, amount } = this.state;
		return (
			<View style={styles.container}>
				<Header style={{ flex: 0.08 }} />
				<View style={styles.balance}>
					<Text style={styles.balanceText}>Your Money: {balance}$</Text>
				</View>
				<View style={styles.receiverInforView}>
					<Text style={styles.balanceText}>Receiver Information</Text>
					<Text style={styles.title}>Receiver ID: </Text>
					<TextInput
						value={userId}
						onChangeText={this.onChangeUserId}
						placeholder={'User ID'}
						// style={}
						underlineColorAndroid={'black'}
					></TextInput>
					<Text style={styles.title}>Amount: </Text>
					<TextInput
						value={amount}
						onChangeText={this.onChangeAmount}
						placeholder={'Amount'}
						// style={}
						underlineColorAndroid={'black'}
					></TextInput>
				</View>
				<TouchableOpacity style={styles.sentButton}>
					<Text style={{ fontWeight: 'bold' }}>SENT YOUR MONEY</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
