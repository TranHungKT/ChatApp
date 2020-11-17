import React from 'react';
import {View, Text, processColor} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {Language, Color, Config, RouteNames} from '@common';
import {
  AddGroupIcon,
  ComposeIcon,
  InfoIcon,
  NotificationIcon,
  BackIcon,
  Search,
} from '@svg';

const Header = (props) => {
  if (props.type === Config.typeOfHeader.group) {
    return (
      <HeaderGroupChat
        type={Config.typeOfHeader.group}
        navigation={props.navigation}
      />
    );
  } else if (props.type === Config.typeOfHeader.chats) {
    return <HeaderChat {...props} />;
  } else if (props.type === Config.typeOfHeader.detail) {
    return <HeaderDetail {...props} />;
  } else if (props.type === Config.typeOfHeader.contact) {
    return <HeaderGroupChat type={Config.typeOfHeader.contact} />;
  }
};

const HeaderGroupChat = (props) => {
  let title =
    props.type === Config.typeOfHeader.group
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
        <NotificationIcon style={{marginRight: 10}} fill="#FFF" />
        <Search
          height={24}
          width={24}
          onPress={() => props.navigation.navigate(RouteNames.Search)}
        />
      </View>
    </View>
  );
};

const HeaderChat = (props) => {
  const title = props.title;
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackIcon height={24} width={24} />
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.svgBigView}>
        <InfoIcon />
      </View>
    </View>
  );
};

export default Header;
