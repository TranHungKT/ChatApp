import React, {Component} from 'react';
import {Search} from '@containers';

export default class SearchScreen extends Component {
  render() {
    return <Search navigation={this.props.navigation} />;
  }
}
