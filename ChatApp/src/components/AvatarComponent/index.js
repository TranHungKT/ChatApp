import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const AvatarComponent = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  source,
  isSmallAvatar,
  style,
  ...attributes
}) => {
  let tempSource = {
    uri: `${source}`,
  };
  return (
    <Component
      style={{alignItems: 'center', justifyContent: 'center', marginRight: 10}}>
      <Image
        source={tempSource}
        style={isSmallAvatar ? styles.smallAvatar : styles.avatar}></Image>
    </Component>
  );
};

export default AvatarComponent;
