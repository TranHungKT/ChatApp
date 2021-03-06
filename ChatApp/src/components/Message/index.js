import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Config } from '@common';
import { getChats, afterPostMessage } from '../../redux/actions/chatAction';
import { updateLastMessage } from '../../redux/actions/roomAction';
import { connect } from 'react-redux';
import ListMessage from '../ListMessage';
class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isTyping: false,
			userIsTyping: '',
			messageObj: {},
			chatArray: [],
			image: '',
		};
		const { socket } = this.props;
		this.initSocket(socket);
	}
	componentDidMount() {
		this.loadChat();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.messageObj !== this.state.messageObj) {
			const { roomId } = this.props;
			const { messageObj } = this.state;
			this.props.updateLastMessage(
				roomId,
				messageObj.sender,
				messageObj.message
			);
		}
	}

	/*
    sender is name of sender
    userId is _id of sender
    message need to be format at server
  */
	loadChat = async () => {
		const { roomId } = this.props;
		await this.props.getChats(roomId);
		const tempChatArray = this.props.chats.chats;
		const temp = tempChatArray.find((element) => element._id == roomId);
		this.setState({ chatArray: temp.chatArray });
	};

	initSocket = (socket) => {
		const { roomId } = this.props;
		socket.on(Config.Event.TYPING, ({ sender, isTyping }) => {
			this.setState({ isTyping: isTyping, userIsTyping: sender });
		});
		socket.on(Config.Event.MESSAGE_SENT, ({ messageSent }) => {
			this.setState({ messageObj: messageSent });
			const temp = this.props.afterPostMessage(messageSent, roomId);
			const tempChatArray = this.state.chatArray.concat(
				temp.payload.messageSent
			);
			this.setState({ chatArray: tempChatArray });
		});
	};

	isMyMessage = () => {
		const { userData } = this.props.user;
		return messageObj.userId == userData._id;
	};

	render() {
		const { isTyping, userIsTyping, chatArray } = this.state;
		const { userData } = this.props.user;
		const annouceTyping =
			isTyping == true ? (
				<View style={styles.typingMainView}>
					<Text style={styles.textIsTyping}>
						{userIsTyping} is typing messages ...
					</Text>
				</View>
			) : null;

		return (
			<View style={{ flex: 1 }}>
				<View style={styles.container}>
					{annouceTyping}

					<ListMessage
						chatArray={chatArray}
						userId={userData._id}
						roomId={this.props.roomId}
						sender={userData.userName}
					/>
				</View>
			</View>
		);
	}
}

const mapActionToProps = {
	getChats,
	afterPostMessage,
	updateLastMessage,
};
const mapStateToProps = (state) => ({
	user: state.userReducer,
	chats: state.chatReducer,
});

export default connect(mapStateToProps, mapActionToProps)(Message);
