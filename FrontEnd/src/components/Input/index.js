import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Styles} from '@common';
const Input = (props) => {
  return <StandartTextInput {...props} />;
};

const StandartTextInput = (props) => {
  <View>
    <Text style={styles.text}>{props.text}</Text>
    <TextInput
      style={[styles.textInput, props.inputStyle]}
      placeholderTextColor="#444444"
      placeholderStyle={styles.placeHolder}
      underlineColorAndroid="transparent"
      {...props}
    />
  </View>;
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    textAlign: 'left',
    borderColor: '#7ED321',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
  },
  text: {
    ...Styles.Common.textCommon,
  },
  placeHolder: {
    fontFamily: Styles.FontFamily.QuicksandLight,
    fontSize: 12,
  },
});

export default Input;
