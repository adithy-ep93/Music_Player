import React,{useEffect} from 'react';
import MainNavigation from './src/navigation/main_navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(() => SplashScreen.hide());
  return (
  <MainNavigation/>
  );
};

export default App;
