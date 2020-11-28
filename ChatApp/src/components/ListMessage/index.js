import React, { Component } from 'react';
import {
	View,
	Text,
	KeyboardAvoidingView,
	FlatList,
	Animated,
} from 'react-native';

import styles from './styles';
import { connect } from 'react-redux';
import { Styles, Color } from '@common';
import ListSpacer from '../ListSpacer';
import AvatarComponent from '../AvatarComponent';
import moment from 'moment';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class ListMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			yourFriend: {},
			chat: [],
		};
	}

	componentDidMount() {
		this.setState({ yourFriend: this.props.yourFriend });
		this.reverse();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.chatArray !== this.props.chatArray) {
			this.reverse();
		}
	}
	reverse = () => {
		const temp = this.props.chatArray.slice().reverse();
		this.setState({ chat: temp });
	};

	_renderItem = (items) => {
		const item = items.item;
		return (
			<View>
				{this.isMyMessage(item.sender) ? (
					<View style={styles.container}>
						<View
							style={[
								styles.messageBox,
								{
									backgroundColor: Color.message.myMessBackground,
									marginLeft: Styles.message.myMessMargin.marginLeft,
									marginRight: Styles.message.myMessMargin.marginRight,
								},
							]}
						>
							<View style={styles.myMessage}>
								<Text style={styles.message}>{item.message}</Text>
								<Text style={styles.time}>
									{moment(item.updatedAt).format('LT')}
								</Text>
							</View>
						</View>
					</View>
				) : (
					<View style={[styles.container, { flexDirection: 'row' }]}>
						<AvatarComponent
							isSmallAvatar={true}
							source={this.props.yourFriend.image}
							style={styles.avatar}
						/>
						<View
							style={[
								styles.messageBox,
								{
									backgroundColor: Color.message.notMyMessBackground,
									marginLeft: Styles.message.notMyMessMargin.marginLeft,
									marginRight: Styles.message.notMyMessMargin.marginRight,
									flexDirection: 'row',
								},
							]}
						>
							<Text style={styles.message}>{item.message}</Text>
							<Text style={styles.time}>
								{moment(item.updatedAt).format('LT')}
							</Text>
						</View>
					</View>
				)}
			</View>
		);
	};

	isMyMessage = (senderCheck) => {
		const { sender } = this.props;
		return sender === senderCheck;
	};

	_keyExtractor = (item, index) => index.toString();

	render() {
		return (
			<ListSpacer>
				{({ flatListHeight }) => (
					<KeyboardAvoidingView
						behavior='padding'
						keyboardVerticalOffset={Styles.messageInputHeight}
					>
						<AnimatedFlatList
							inverted
							data={this.state.chat}
							keyExtractor={this._keyExtractor}
							style={{ height: flatListHeight }}
							renderItem={this._renderItem}
							contentContainerStyle={{
								paddingTop: Styles.messageInputHeight * 2.5,
							}}
						/>
					</KeyboardAvoidingView>
				)}
			</ListSpacer>
		);
	}
}

const mapActionToProps = {};

const mapStateToProps = (state) => ({
	chats: state.chatReducer,
	yourFriend: state.roomReducer.yourFriend,
});

export default connect(mapStateToProps, mapActionToProps)(ListMessage);
