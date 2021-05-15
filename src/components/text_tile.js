import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../config/colors';

const TextTile = ({headText, subText, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={style.section}>
        <Text style={style.headText}>{headText}</Text>
        <Text style={style.subText}>{subText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextTile;

const style = StyleSheet.create({
  headText: {
    color: '#fff',
    fontSize:16,
    paddingLeft: 10,
  },
  subText: {
    fontSize:12,
    color: 'grey',
    paddingLeft: 10,
  },
  section: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.primary,
    paddingLeft: 5,
   
  },
});