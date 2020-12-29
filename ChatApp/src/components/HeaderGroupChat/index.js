import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { NotificationIcon, BackIcon, Search } from '@svg';
import { RouteNames, Config, Language } from '@common';
import { connect } from 'react-redux';
class HeaderGroupChat extends Component {
	render() {
		const title =
			this.props.type === Config.typeOfHeader.group
				? Language.title.your_group_chat
				: Language.title.your_contact;

		return (
			<View style={styles.container}>
				<View style={styles.backButton}>
					<BackIcon height={24} width={24} />
				</View>
				<View style={{ flex: 0.1 }}></View>
				<View style={styles.title}>
					<Text style={styles.titleText}>{title}</Text>
				</View>
				<View style={styles.svgBigView}>
					<NotificationIcon style={{ marginRight: 10 }} fill='#FFF' />
					<Search
						height={24}
						width={24}
						onPress={() => this.props.navigation.navigate(RouteNames.Search)}
					/>
				</View>
			</View>
		);
	}
}
const mapStateToProps = (state) => ({});
const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(HeaderGroupChat);
