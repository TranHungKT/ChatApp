import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AuthScreen from './AuthScreen';
import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';
import GroupChatScreen from './GroupChatScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';
import FriendProfileScreen from './FriendProfileScreen';
import WalletScreen from './WalletScreen';

import { HeaderAuth } from '@components';

// Styles
import { Color, RouteNames } from '@common';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
const AuthStack = createStackNavigator(
	{
		[RouteNames.Auth]: {
			screen: AuthScreen,
			navigationOptions: {
				headerShown: false,
			},
		},
		[RouteNames.Login]: {
			screen: LoginScreen,
		},
	},
	{
		defaultNavigationOptions: {
			header: () => <HeaderAuth />,
		},
	}
);
const tabContainer = createBottomTabNavigator(
	{
		[RouteNames.GroupChat]: {
			screen: GroupChatScreen,
			navigationOptions: {
				tabBarIcon: () => (
					<Icon name='users' color={Color.activeBackgroundColor} size={22} />
				),
			},
		},
		[RouteNames.Profile]: {
			screen: ProfileScreen,
			navigationOptions: {
				headerShown: false,
				tabBarIcon: () => (
					<Icon name='user' color={Color.activeBackgroundColor} size={22} />
				),
			},
		},
		[RouteNames.Wallet]: {
			screen: WalletScreen,
			navigationOptions: {
				headerShown: false,
				tabBarIcon: () => (
					<Icon5 name='wallet' color={Color.activeBackgroundColor} size={22} />
				),
			},
		},
	},
	{
		tabBarOptions: {
			labelStyle: { color: 'black', fontSize: 14 },
			activeTintColor: Color.activeBackgroundColor,
			inactiveBackgroundColor: 'gray',
		},
	}
);

const AvailableGroupChat = createStackNavigator({
	tabContainer: {
		screen: tabContainer,
		navigationOptions: {
			headerShown: false,
			tabBarVisible: false,
		},
	},
	[RouteNames.Chat]: {
		screen: ChatScreen,
		navigationOptions: {
			headerShown: false,
			tabBarVisible: false,
		},
	},
	[RouteNames.Search]: {
		screen: SearchScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
	[RouteNames.FriendProfile]: {
		screen: FriendProfileScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
});

const groupContainer = createStackNavigator({
	AuthStack: {
		screen: AuthStack,
		navigationOptions: {
			headerShown: false,
		},
	},
	AvailableGroupChat: {
		screen: AvailableGroupChat,
		navigationOptions: {
			headerShown: false,
		},
	},
});

export default createAppContainer(groupContainer);
