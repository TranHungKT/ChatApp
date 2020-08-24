import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
const Button = (props) => {
  // if (props.type === 'short') {
  return <ShortButton {...props} />;
  // }
};
const ShortButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonShort, props.styleButton]}
      onPress={() => props.navigate()}>
      <Text style={styles.textButtonShort}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
