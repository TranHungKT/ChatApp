import React from 'react';
import {Text, View, Image} from 'react-native';

import {
  createAppContainer,
  createSwitchNavigator,
  StackActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

import AuthScreen from './AuthScreen';
import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';
import GroupChatScreen from './GroupChatScreen';
import {RouteNames} from '@common';

import {HeaderAuth, Header} from '@components';

const defaultHeaderObject = {
  header: (props) => <Header type={'group'} />,
};

const createDefaultStackNavigator = (screensObject, customOptions) =>
  createStackNavigator(screensObject, {
    defaultNavigationOptions: {...defaultHeaderObject},
    headerMode: 'screen',
    ...customOptions,
  });

const AuthStack = createDefaultStackNavigator(
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
  },
);

const AvailableGroupChat = createDefaultStackNavigator(
  {
    [RouteNames.GroupChat]: {
      screen: GroupChatScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    [RouteNames.Chat]: {
      screen: ChatScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    defaultNavigationOptions: {
      header: () => <Header type={'group'} />,
    },
  },
);

const appContainer = createDefaultStackNavigator({
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

export default createAppContainer(appContainer);
