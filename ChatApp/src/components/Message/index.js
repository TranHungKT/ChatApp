import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
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
		const chats = await this.props.getChats(roomId);
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

		socket.on(Config.Event.MESSAGE_SENT_IMAGE, ({ imageSent }) => {
			console.log('sss', imageSent.url);
			this.setState({ image: imageSent.url });
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
		console.log('test', this.state.image);
		const a = this.state.image;
		return (
			<View style={{ flex: 1 }}>
				<Image
					source={{
						uri: `${Config.server}uploads/rn_image_picker_lib_temp_0f2cf6d3-310d-4193-8d2a-e29ce220e47c.jpg`,
					}}
					style={{ height: 200, width: 200 }}
				/>
				<View style={styles.container}>
					{annouceTyping}

					<ListMessage
						chatArray={chatArray}
						userId={userData._id}
						roomId={this.props.roomId}
						sender={userData.userName}
						image
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
