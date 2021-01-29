import React from 'react';
import {Component} from 'react';
import {StyleSheet,View,Button,Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Aads from './src/screens/aads';
import Favhome from './src/screens/Favourite/favhome';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
/*
const App = () => {
  return (<View><Aads/></View>);
};*/


const App = () => {
  return (<Favhome/>);
};


export default App;