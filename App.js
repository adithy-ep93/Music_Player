import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from './src/config/colors';
import MainNavigation from './src/navigation/main_navigation';
import Scan from './src/screens/Scan/scan_library';
import  HomePage  from './src/screens/Home/home_page';

const App = () => {
  return (
  <MainNavigation/>
  // <Scan/>
  // <HomePage/>
  );
};


export default App;
