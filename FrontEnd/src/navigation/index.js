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
import {RouteNames} from '@common';

const createDefaultStackNavigator = (screenObject, customOtions) => {
  createStackNavigator(screenObject, {});
};

const AuthStack = createStackNavigator(
  {
    [RouteNames.Auth]: {
      screen: AuthScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(AuthStack);
