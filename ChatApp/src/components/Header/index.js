import React from 'react';
import { View, Text, processColor } from 'react-native';

import styles from './styles';
import { Language, Color, Config, RouteNames } from '@common';
import { InfoIcon, NotificationIcon, BackIcon, Search } from '@svg';
import HeaderGroupChat from '../HeaderGroupChat';
const Header = (props) => {
	if (props.type === Config.typeOfHeader.group) {
		return (
			<HeaderGroupChat
				type={Config.typeOfHeader.group}
				navigation={props.navigation}
			/>
		);
	} else if (props.type === Config.typeOfHeader.chats) {
		return <HeaderChat {...props} />;
	} else if (props.type === Config.typeOfHeader.detail) {
		return <HeaderDetail {...props} />;
	} else if (props.type === Config.typeOfHeader.contact) {
		return (
			<HeaderGroupChat
				type={Config.typeOfHeader.contact}
				navigation={props.navigation}
			/>
		);
	}
};

const HeaderChat = (props) => {
	const title = props.title;
	return (
		<View style={styles.container}>
			<View style={styles.backButton}>
				<BackIcon height={24} width={24} />
			</View>

			<View style={styles.title}>
				<Text style={styles.titleText}>{title}</Text>
			</View>

			<View style={styles.svgBigView}>
				<InfoIcon />
			</View>
		</View>
	);
};

export default Header;
