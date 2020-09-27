import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';
const avatarSizes = 75;
const source = {
  uri:
    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2190&q=80',
};
const AvatarComponent = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  //   source,
  ...attributes
}) => {
  return (
    <Component>
      <Image source={source} style={styles.avatar}></Image>
    </Component>
  );
};

export default AvatarComponent;
