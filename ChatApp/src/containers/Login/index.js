import React, {Component} from 'react';
import {View, Text, Switch, KeyboardAvoidingView} from 'react-native';
import {toast} from '../../common/Setting';

import {Input, Button, LoginWithFTG} from '@components';
import styles from './styles';
import {Language, RouteNames, Config, Validate} from '@common';
import {connect} from 'react-redux';
import {getUserData} from '../../redux/actions/userAction';

import Network from '@services/Network';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Dong@gmail.com',
      password: '123456',
      press: false,
      loading: false,
      remember: true,
      errorEmail: '',
      errorPassword: '',
      isEnableLoginButton: false,
    };
    this.oneEmailEditHandle = (email) =>
      this.setState({email, errorEmail: '', errorPassword: ''});
    this.onPasswordEditHandle = (password) =>
      this.setState({password, errorEmail: '', errorPassword: ''});
    this.focusPassword = () => {
      this.password && this.password.focus();
    };
  }

  validateLoginData = () => {
    const {email, password} = this.state;
    let isValid = true;
    let errorEmail = '';
    let errorPassword = '';
    if (!email) {
      errorEmail = Language.login.missEmail;
      isValid = false;
    } else if (!Validate.isEmail(email)) {
      errorEmail = Language.login.loginRontEmail;
      isValid = false;
    }
    if (!password) {
      errorPassword = Language.login.loginRontPass;
      isValid = false;
    }
    this.setState({errorEmail, errorPassword});
    return isValid;
  };

  onLoginPressHandle = () => {
    const {email, password} = this.state;
    let isValid = this.validateLoginData();
    return isValid && this.login(email, password);
  };

  login = async (email, password) => {
    const netStatus = await Network.checkNetwork();
    if (!netStatus) {
      return toast(Language.noConnection);
    }
    const response = await fetch(`${Config.server}user/auth/login`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    });

    if (response.status == 200) {
      let cookie = response.headers.get('set-cookie');
      this.props.getUserData(cookie);
      this.props.navigation.navigate(RouteNames.GroupChat, {
        cookie: cookie,
      });
    } else if (response.status == 400) {
      this.setState({
        errorEmail: Language.login.loginRontEmail,
        loading: false,
      });
    } else if (response.status == 401) {
      this.setState({
        errorPassword: Language.login.loginRontPass,
        loading: false,
      });
    }
  };
  toggleRemmeber = () => {
    this.setState((prevState) => ({remember: !prevState.remember}));
  };

  render() {
    const {email, password, errorEmail, errorPassword} = this.state;

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
          {!!errorEmail && <Text style={styles.error}>{errorEmail}</Text>}
          <Input
            text={'Password'}
            ref={(comp) => (this.password = comp)}
            onChangeText={this.onPasswordEditHandle}
            value={password}
            onSubmitEditing={this.onLoginPressHandle}
          />
          {!!errorPassword && <Text style={styles.error}>{errorPassword}</Text>}
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
            navigation={this.props.navigation}
            onPress={this.onLoginPressHandle}></Button>
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

const mapStateToProps = (state) => ({});

const mapActionToProps = {
  getUserData,
};

export default connect(mapStateToProps, mapActionToProps)(Login);

//Set error cho Login
/* 
Gồm có 2 lỗi, 1 là lỗi email 2 là lỗi login
Đầu tiên sẽ validate offline theo file validate sau đó set isLoading = false
Ghi bấm nút login thì isLoading cần phải là false mới có thể load data
Trong khoảng thời gian load data sẽ hiện lên vòng xoay
LoginButton chỉ được bật nếu đã điền cả email và password





*/
