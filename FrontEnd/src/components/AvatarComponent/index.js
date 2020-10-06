import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const AvatarComponent = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  source,
  ...attributes
}) => {
  let tempSource = {
    uri: `${source}`,
  };
  return (
    <Component>
      <Image source={tempSource} style={styles.avatar}></Image>
    </Component>
  );
};

export default AvatarComponent;
