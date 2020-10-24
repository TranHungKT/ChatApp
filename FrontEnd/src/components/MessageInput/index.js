import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

import {Emoji, Voice, Camera, More} from '@svg';
import {Styles} from '@common';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      height: 0,
    };
  }
  onChangeText = (message) => {
    this.setState({message: message});
  };
  render() {
    let {height, message} = this.state;
    return (
      <View
        style={[
          styles.container,
          {height: Math.max(Styles.messageInputHeight, height + 8)},
        ]}>
        <View style={styles.moreButtonView}>
          <More height={28} width={28} />
        </View>

        <View style={styles.textInputView}>
          <View style={styles.view}>
            <TextInput
              placeholder="Aa"
              multiline={true}
              onChangeText={this.onChangeText}
              onContentSizeChange={(event) => {
                if (height < Styles.height / 4) {
                  this.setState({height: event.nativeEvent.contentSize.height});
                } else {
                  event.nativeEvent.contentSize.height = Styles.height / 4;
                  if (message == '') {
                    console.log('rong');
                    this.setState({height: Styles.messageInputHeight - 8});
                  }
                }
              }}
              style={[
                styles.textInput,
                {
                  height: Math.max(
                    Styles.messageInputHeight - 8,
                    height,
                    // Styles.height / 4,
                  ),
                },
              ]}
            />
            <Emoji height={28} width={28} style={{marginRight: 10}} />
          </View>
        </View>
      </View>
    );
  }
}
