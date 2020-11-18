import {Search, Cursor} from '@svg';
import React, {Component} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import styles from './styles';
import {Language, Config} from '@common';
import AvatarComponent from '../AvatarComponent';
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      friends: null,
    };
  }

  onChange = (searchString) => {
    this.setState({searchString: searchString});
    this.searchFriends(searchString);
  };

  searchFriends = async (searchString) => {
    const Friends = await fetch(`${Config.server}user/action/searchFriend`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchString: searchString,
      }),
    });
    const friends = await Friends.json();
    if (friends) {
      this.setState({friends: friends});
    } else {
      console.log('errroe');
    }
  };
  _renderItem = (items) => {
    let {item} = items;

    return (
      <View style={styles.itemView}>
        <AvatarComponent isSmallAvatar={true} source={item.image} />
        <Text style={styles.itemName}>{item.userName}</Text>
      </View>
    );
  };
  _keyExtractor = (data) => {
    console.log('item', data);
    // console.log(index);
    // return index.toString();
  };
  render() {
    let {searchString} = this.state;
    let listFriends =
      searchString !== '' ? (
        <View style={styles.listFriendView}>
          <FlatList
            data={this.state.friends}
            renderItem={this._renderItem}
            keyExtractor={(data) => data._id.toString()}
          />
        </View>
      ) : null;
    return (
      <View style={{zIndex: 1, backgroundColor: '#FFF'}}>
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
              onChangeText={this.onChange}
              value={searchString}
            />
          </View>
        </View>
        {listFriends}
      </View>
    );
  }
}