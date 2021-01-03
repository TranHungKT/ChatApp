import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

import { Emoji, Voice, Camera, More } from '@svg';
import { Styles, Config } from '@common';
import { connect } from 'react-redux';

import { updateLastMessage } from '../../redux/actions/roomAction';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

class MessageInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			height: 0,
			isTyping: false,
			image: '',
		};
	}

	componentDidMount() {
		const { socket } = this.props;
	}

	/*
	 * In this component, sender is sender
	 * onChangeText function will return a onTyping event to server
	 * @param sender {string} // Mean sender like i said
	 * @param roomId {id} get from listcommon chat
	 */

	onChangeText = (message) => {
		this.setState({ message: message });
		this.sendTyping();
	};
	sendTyping = () => {
		this.lastUpdateTime = Date.now();
		if (!this.state.isTyping) {
			this.setState({ isTyping: true });
			this.emitEventTyping(true);
			this.startCheckingTyping();
		}
	};

	startCheckingTyping = () => {
		this.typingInterval = setInterval(() => {
			if (Date.now() - this.lastUpdateTime > 1000) {
				this.setState({ isTyping: false });
				this.stopCheckingTyping();
			}
		}, 300);
	};

	stopCheckingTyping = () => {
		if (this.typingInterval) {
			clearInterval(this.typingInterval);
			this.emitEventTyping(false);
		}
	};

	emitEventTyping = (isTyping) => {
		const { socket, roomId, sender } = this.props;
		return socket.emit(Config.Event.TYPING, { roomId, sender, isTyping });
	};
	/*
    This function sent message to server
    @param roomId mean room which will receive the message
    @param sender mean sender
    @param message {string}
  */
	onSentMessage = () => {
		const { socket, roomId, sender, userId } = this.props;
		const message = this.state.message;
		socket.emit(Config.Event.MESSAGE_SENT, {
			roomId,
			sender,
			message,
			userId,
			type: 'text',
		});
		this.setState({ message: '' });
		this.props.updateLastMessage(roomId, sender, message);
	};

	onSentImage = (url) => {
		const { socket, roomId, sender, userId } = this.props;

		socket.emit(Config.Event.MESSAGE_SENT, {
			roomId,
			sender,
			message: url,
			userId,
			type: 'image',
		});
	};

	selectImage = () => {
		launchImageLibrary(
			{
				mediaType: 'photo',
				maxHeight: 1500,
				maxWidth: 1500,
			},
			async (response) => {
				const formData = new FormData();
				formData.append('file', {
					uri: response.uri,
					name: response.fileName,
					type: response.type,
				});
				try {
					const response = await fetch(`${Config.server}user/upload/image`, {
						method: 'POST',
						headers: {
							Accept: 'application/json',
							'Content-type': 'multipart/form-data',
						},
						body: formData,
					});
					const data = await response.json();
					this.onSentImage(data.url);
				} catch (error) {
					console.log('err', error);
				}
			}
		);
	};
	render() {
		const { height, message } = this.state;
		return (
			<View
				style={[
					styles.container,
					{ height: Math.max(Styles.messageInputHeight, height + 8) },
				]}
			>
				<View style={styles.moreButtonView}>
					<TouchableOpacity>
						<More height={28} width={28} />
					</TouchableOpacity>
				</View>

				<View style={styles.textInputView}>
					<View style={styles.view}>
						<TextInput
							placeholder='Aa'
							multiline={true}
							numberOfLines={10}
							onChangeText={this.onChangeText}
							onContentSizeChange={(event) => {
								this.setState({ height: event.nativeEvent.contentSize.height });
							}}
							style={[
								styles.textInput,
								{
									height: Math.max(Styles.messageInputHeight - 8, height),
								},
							]}
							autoCorrect={false}
							onSubmitEditing={this.onSentMessage}
							keyboardType='default'
							value={message}
						/>
						<Emoji height={28} width={28} style={{ marginRight: 10 }} />
					</View>
				</View>
				<View style={styles.functionView}>
					<TouchableOpacity onPress={this.selectImage}>
						<Camera height={28} width={28} />
					</TouchableOpacity>

					<TouchableOpacity onPress={this.onSentMessage}>
						<Voice height={28} width={28} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapActionToProps = {
	updateLastMessage,
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapActionToProps)(MessageInput);
