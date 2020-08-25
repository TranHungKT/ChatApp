import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
} from 'react-native';

import {Input, Button, LoginWithFTG} from '@components';
import styles from './styles';
import {Language, RouteNames} from '@common';
import {connect} from 'react-redux';
import {getUserData} from '../../redux/actions/userAction';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'tranhung26122612@email.com',
      password: 'tuntun',
      press: false,
      loading: false,
      remember: true,
    };
    this.oneEmailEditHandle = (email) => this.setState({email});
    this.onPasswordEditHandle = (password) => this.setState({password});
    this.focusPassword = () => {
      this.password && this.password.focus();
    };
  }
  login = (email, password) => {
    this.setState({loading: true});
    return fetch('http://192.168.1.19:3000/user/auth/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          let cookie = response.headers.get('set-cookie');
          this.props.getUserData(cookie);
          this.props.navigation.navigate(RouteNames.Chat);
        }
      })
      .catch((err) => console.log(err));
  };
  toggleRemmeber = () => {
    this.setState((prevState) => ({remember: !prevState.remember}));
  };

  render() {
    const {email, password} = this.state;
    // console.log(this.props.navigation);
    return (
      <KeyboardAvoidingView
        style={styles.mainView}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputView}>
          <Input
            text={'Email'}
            ref={(comp) => (this.email = comp)}
            placeholder={'your.name@email.com'}
            onChangeText={this.oneEmailEditHandle}
            onSubmitEditing={this.focusPassword}
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
          />
          <Input
            text={'Password'}
            ref={(comp) => (this.password = comp)}
            onChangeText={this.onPasswordEditHandle}
            value={password}
          />
          <View style={styles.remmemberView}>
            <Text style={styles.text}>{Language.login.remmeber_me}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#6DCAF3'}}
              thumbColor={'#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleRemmeber}
              value={this.state.remember}
              style={styles.switch}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <Button
            styleButton={styles.button}
            title={Language.login.login}
            onPress={() => this.login(email, password)}
            navigation={this.props.navigation}></Button>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(RouteNames.Chat)}>
            <Text>hello</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.FTGview}>
          <LoginWithFTG text={Language.login.login_with_another_api} />
        </View>
        <View style={styles.signupView}>
          <Text style={[styles.text, {textAlign: 'center'}]}>
            {Language.login.not_registered}
          </Text>
          <Text style={[styles.text, {textAlign: 'center', color: '#0000FF'}]}>
            {Language.login.signup}
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});

const mapActionToProps = {
  getUserData,
};

export default connect(mapStateToProps, mapActionToProps)(Login);
