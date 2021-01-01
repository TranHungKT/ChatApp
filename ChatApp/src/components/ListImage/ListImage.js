import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

// Config
import { Config } from '@common';

// Styles
import styles from './styles';

export default class ListImage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderItem = ({ item }) => {
		return (
			<View style={styles.wrapperContent}>
				<Image
					source={{
						uri: `${Config.server}${item}`,
					}}
					style={styles.image}
				/>
			</View>
		);
	};

	keyExtractor = (index) => index.toString();

	render() {
		const { gallery } = this.props;
		return (
			<FlatList
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
				data={gallery}
				numColumns={3}
			/>
		);
	}
}
