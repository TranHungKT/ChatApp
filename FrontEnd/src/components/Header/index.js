import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {Language, Color} from '@common';
import {
  AddGroupIcon,
  ComposeIcon,
  InfoIcon,
  NotificationIcon,
  BackIcon,
} from '@svg';

const Header = (props) => {
  if (props.type === 'group') {
    return <HeaderGroupChat type={'group'} />;
  } else if (props.type === 'chats') {
    return <HeaderChat {...props} />;
  } else if (props.type === 'detail') {
    return <HeaderDetail {...props} />;
  } else if (props.type === 'contact') {
    return <HeaderGroupChat type={'contact'} />;
  }
};

const HeaderGroupChat = (props) => {
  let title =
    props.type === 'group'
      ? Language.title.your_group_chat
      : Language.title.your_contact;

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackIcon height={24} width={24} />
      </View>
      <View style={{flex: 0.1}}></View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.svgBigView}>
        {/* <View style={styles.svgView}> */}
        <NotificationIcon style={{marginRight: 10}} />
        <AddGroupIcon />
        {/* </View> */}
      </View>
    </View>
  );
};

export default Header;
