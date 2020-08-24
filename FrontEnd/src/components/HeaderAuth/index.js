import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Logo} from '@svg';

import {Styles} from '@common';

const styles = StyleSheet.create({
  logo: {
    ...Styles.Common.ColumnCenter,
  },
});

export default class HeaderAuth extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.logo}>
        <Logo height={Styles.height / 10} width={Styles.width / 5} />
      </View>
    );
  }
}
