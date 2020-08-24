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
import {RouteNames} from '@common';

import {HeaderAuth} from '@components';

const defaultHeaderObject = {
  header: (props) => <Header typeOfTab={props.typeOfTab} />,
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

export default createAppContainer(AuthStack);
