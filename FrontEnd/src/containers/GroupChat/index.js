import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SearchBar, GroupDevice} from '@components';
import {Language} from '@common';
export default class GroupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <SearchBar />
        <GroupDevice text={Language.groupDevice.recentChat} />
      </View>
    );
  }
}
