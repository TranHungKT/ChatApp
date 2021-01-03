import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles';
export default class ListTransfer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderItem = ({ item }) => {
		// console.log({ item });
		const { type } = this.props;
		const { receiver, amount, description, sender } = item;

		return (
			<View style={styles.item}>
				<View style={styles.transferView}>
					{type == 'SENT' ? (
						<>
							<View style={{ flexDirection: 'row' }}>
								<Image
									source={{
										uri: receiver.image,
									}}
									style={styles.image}
								/>
								<View>
									<Text style={styles.nameText}>
										{receiver.userName.toUpperCase()}
									</Text>
									<Text style={styles.description}>
										Description: {description}
									</Text>
								</View>
							</View>

							<Text style={styles.plus}>+ {amount}$</Text>
						</>
					) : (
						<>
							<View style={{ flexDirection: 'row' }}>
								<Image
									source={{
										uri: sender.image,
									}}
									style={styles.image}
								/>
								<View>
									<Text style={styles.nameText}>
										{sender.userName.toUpperCase()}
									</Text>
									<Text style={styles.description}>
										Description: {description}
									</Text>
								</View>
							</View>

							<Text style={styles.minus}>- {amount}$</Text>
						</>
					)}
				</View>
			</View>
		);
	};

	keyExtractor = (item, index) => index.toString() + item._id;

	render() {
		const { type, data } = this.props;
		return (
			<View style={[styles.container, this.props.style]}>
				<View style={styles.titleView}>
					<Text style={styles.title}>{type}</Text>
				</View>

				<FlatList
					style={{ flex: 0.8 }}
					data={data}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
				/>
			</View>
		);
	}
}
