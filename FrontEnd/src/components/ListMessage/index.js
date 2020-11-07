import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {connect} from 'react-redux';

class ListMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsInRoom: [],
    };
  }

  componentDidMount() {
    const {roomId} = this.props;
    let friendsInRoom = this.isCurrentRoom(roomId);
    this.setState({friendsInRoom: friendsInRoom.friendsInRoom});
  }
  isCurrentRoom = (roomId) => {
    return this.props.friendsInRoom.find((element) => element._id == roomId);
  };
  _renderItem = (items) => {
    const item = items.item;
    return (
      <View>
        {this.isMyMessage(item.sender) ? (
          <Text>{item.message}</Text>
        ) : (
          <Text style={{marginLeft: 20, color: 'red'}}>{item.message}</Text>
        )}
      </View>
    );
  };

  isMyMessage = (sender) => {
    const {userName} = this.props;
    // console.log('username', userName);
    // console.log('sender', sender);
    return userName === sender;
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    const {chatArray} = this.props;
    // console.log(this.props.friendsInRoom);
    return (
      <FlatList
        data={chatArray}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}></FlatList>
    );
  }
}

// class Message extends React.PureComponent{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return()
//     }
// }

const mapActionToProps = {};

const mapStateToProps = (state) => ({
  chats: state.chatReducer,
  friendsInRoom: state.roomReducer.room,
});

export default connect(mapStateToProps, mapActionToProps)(ListMessage);
