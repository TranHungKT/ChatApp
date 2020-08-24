import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Styles} from '@common';
const Input = (props) => {
  return <StandartTextInput {...props} />;
};

const StandartTextInput = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput
        style={[styles.textInput, props.inputStyle]}
        placeholderTextColor="#7C7777"
        placeholderStyle={styles.placeHolder}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    height: 60,
    textAlign: 'left',
    borderColor: '#7ED321',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    backgroundColor: '#F2F2F2',
    fontFamily: Styles.FontFamily.QuicksandRegular,
    color: '#444444',
  },
  text: {
    ...Styles.Common.textCommon,
  },
  placeHolder: {
    fontFamily: Styles.FontFamily.QuicksandMedium,
    fontSize: 12,
  },
});

export default Input;
