import { Search, Cursor } from '@svg';
import React, { Component } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import styles from './styles';
import { Language, Config } from '@common';

import FriendSearch from '../FriendSearch';
export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: '',
			friends: null,
		};
	}

	onChange = (searchString) => {
		this.setState({ searchString: searchString });
		this.searchFriends(searchString);
	};

	searchFriends = async (searchString) => {
		const Friends = await fetch(`${Config.server}user/action/searchFriend`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				searchString: searchString,
			}),
		});
		const friends = await Friends.json();
		if (friends) {
			this.setState({ friends: friends });
		} else {
			console.log('error');
		}
	};
	_renderItem = (items) => {
		const { item } = items;

		return <FriendSearch item={item} navigation={this.props.navigation} />;
	};
	render() {
		const { searchString } = this.state;
		const listFriends =
			searchString !== '' ? (
				<View style={styles.listFriendView}>
					<FlatList
						data={this.state.friends}
						renderItem={this._renderItem}
						keyExtractor={(data) => data._id.toString()}
					/>
				</View>
			) : null;
		return (
			<View style={{ zIndex: 1, backgroundColor: '#FFF' }}>
				<View style={styles.mainView}>
					<View style={styles.searchView}>
						<Search height={20} width={20} />
					</View>
					<View style={styles.cursorView}>
						<Cursor height={40} width={20} />
					</View>
					<View style={styles.textInputView}>
						<TextInput
							placeholder={Language.searchText}
							style={styles.textInput}
							onChangeText={this.onChange}
							value={searchString}
						/>
					</View>
				</View>
				{listFriends}
			</View>
		);
	}
}
