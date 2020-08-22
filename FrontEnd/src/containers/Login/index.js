import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon, Left, Spinner} from 'native-base';

const {height: HEIGHT} = Dimensions.get('window');
const {width: WIDTH} = Dimensions.get('window');

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      press: false,
      loading: false,
    };
  }
  login = (username, password) => () => {
    this.setState({loading: true});
    return fetch('https://iotserver192.herokuapp.com/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        user_id: `${username}`,
        password: `${password}`,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          this.setState({loading: false});
          this.props.navigation.navigate('HomeContainer');
        } else {
          this.setState({err: 'Mời bạn nhập lại thông tin', loading: false});
        }
      })
      .catch((err) => console.log(err));
  };
  hidePassword = () => {
    this.setState((prevState) => ({press: !prevState.press}));
  };

  render() {
    const {username, password} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#74BFE4'}}>
        <View style={styles.title}>
          <Text style={styles.loginTitle}>Login</Text>
        </View>
        <View style={styles.input}>
          <Left style={{flex: 0}}>
            <Icon name="ios-contact" style={{fontSize: 32, marginLeft: 5}} />
          </Left>
          <TextInput
            placeholder="username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            style={{width: WIDTH}}></TextInput>
        </View>
        <View style={styles.input}>
          <Left style={{flex: 0}}>
            <Icon name="ios-lock" style={{fontSize: 32, marginLeft: 5}} />
          </Left>
          <TextInput
            placeholder="password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            style={{width: WIDTH}}></TextInput>
        </View>
        <Text
          style={{
            color: 'red',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          {this.state.err}
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={this.login(username, password)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={{flex: 0.1}}>
          {this.state.loading == true ? <Spinner color="red" /> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 0.4,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    textShadowRadius: 10,
    textShadowOffset: {width: 2, height: 2},
    textTransform: 'uppercase',
    textAlignVertical: 'top',
  },
  text: {
    color: 'white',
  },
  input: {
    flexDirection: 'row',
    backgroundColor: '#E2EAE6',
    borderRadius: 25,
    height: 50,
    marginHorizontal: 15,
    marginTop: 20,
  },
  loginButton: {
    position: 'absolute',
    top: HEIGHT - 300,
    width: WIDTH - 155,
    left: 155 / 2,
    height: 55,
    borderRadius: 55,
    backgroundColor: '#E2EAE6',
  },
  loginText: {
    alignSelf: 'center',
    fontSize: 26,
    color: 'blue',
  },
  register: {
    position: 'absolute',
    top: HEIGHT - 100,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  registerText: {
    color: 'white',
  },
});
