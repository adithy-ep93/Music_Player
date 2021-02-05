import React,{useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from './src/config/colors';
//import MainNavigation from './src/navigation/main_navigation';
 //import Scan from './src/screens/Scan/scan_library';
 import Mostplay from './src/screens/search/Mostplay';
 import Defaultlist from './src/screens/search/Defaultlist';
 import Pickfromnet from './src/screens/search/Pickfromnet';
 import Searchlibrary from './src/screens/search/Searchlibrary';
 import Songselected from './src/screens/search/Songselected';

const App = () => {
  return (
  <Searchlibrary/>
   //<Songselected/>
   //<Defaultlist/>
   //<Pickfromnet/>
   //<MainNavigation/>
  );
};


export default App;
