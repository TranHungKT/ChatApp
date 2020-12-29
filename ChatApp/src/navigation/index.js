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

import { HeaderAuth, Header } from '@components';

// Styles
import { Color, RouteNames } from '@common';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultHeaderObject = {
	header: (props) => <Header type={'group'} />,
};

const createDefaultStackNavigator = (screensObject, customOptions) =>
	createStackNavigator(screensObject, {
		defaultNavigationOptions: { ...defaultHeaderObject },
		headerMode: 'screen',
		...customOptions,
	});

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

const AvailableGroupChat = createStackNavigator({
	[RouteNames.GroupChat]: {
		screen: GroupChatScreen,
		navigationOptions: {
			header: ({ navigation }) => (
				<Header navigation={navigation} type={'group'} />
			),
		},
	},
	[RouteNames.Chat]: {
		screen: ChatScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
	[RouteNames.Search]: {
		screen: SearchScreen,
		navigationOptions: {
			headerShown: false,
		},
	},
});
const tabContainer = createBottomTabNavigator(
	{
		AvailableGroupChat: {
			screen: AvailableGroupChat,
			navigationOptions: {
				headerShown: false,
				tabBarIcon: () => (
					<Icon name='user' color={Color.activeBackgroundColor} size={22} />
				),
			},
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				headerShown: false,
				tabBarIcon: () => (
					<Icon name='users' color={Color.activeBackgroundColor} size={22} />
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
const groupContainer = createStackNavigator({
	tabContainer: {
		screen: tabContainer,
		navigationOptions: {
			headerShown: false,
		},
	},
	AuthStack: {
		screen: AuthStack,
		navigationOptions: {
			headerShown: false,
		},
	},
});

export default createAppContainer(groupContainer);
