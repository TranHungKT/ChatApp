import {Search, Cursor} from '@svg';
import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import {Language} from '@common';
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.searchView}>
          <Search height={20} width={20} />
        </View>
        <View style={styles.cursorView}>
          <Cursor height={40} width={20} />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            placeholder={Language.searchText}
            style={styles.textInput}
          />
        </View>
      </View>
    );
  }
}
