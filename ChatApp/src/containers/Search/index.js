import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from '@components';
import styles from './styles';
export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.mainView}>
				<SearchBar navigation={this.props.navigation} />
			</View>
		);
	}
}
