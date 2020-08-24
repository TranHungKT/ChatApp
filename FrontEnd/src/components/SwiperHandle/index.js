import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RouteNames, Language} from '@common';
import styles from './styles';

export default class SwiperHandle extends React.PureComponent {
  render() {
    const {textDes, textTitle, navigation} = this.props;
    return (
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          <Text style={styles.textTitle}>{textTitle}</Text>
        </View>
        <View style={styles.desView}>
          <Text style={styles.textDes}>{textDes}</Text>
        </View>
        <View style={styles.buttonView}>
          <ButtonComponents
            title={Language.signup.signup}
            navigation={navigation}
            to={`${RouteNames.SignUp}`}
          />
          <ButtonComponents
            title={Language.login.login}
            navigation={navigation}
            to={`${RouteNames.Login}`}
          />
        </View>
      </View>
    );
  }
}

class ButtonComponents extends React.PureComponent {
  navigate = () => {
    this.props.navigation.navigate(this.props.to);
  };
  render() {
    return (
      <TouchableOpacity style={styles.buttonShort} onPress={this.navigate}>
        <Text style={styles.textButtonShort}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
