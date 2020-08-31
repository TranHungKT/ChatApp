import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {Language, Color} from '@common';
import {AddGroupIcon, ComposeIcon, InfoIcon, NotificationIcon} from '@svg';

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

const styleIcon = {
  style1: {
    fontWeight: 'bold',
  },
};

const HeaderGroupChat = (props) => {
  let title =
    props.type === 'group'
      ? Language.title.your_group_chat
      : Language.title.your_contact;

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Icon name={'angle-left'} size={26} color={Color.iconColor} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.svgBigView}>
        {/* <View style={styles.svgView}> */}
        <NotificationIcon />
        <AddGroupIcon />
        {/* </View> */}
      </View>
    </View>
  );
};

export default Header;
