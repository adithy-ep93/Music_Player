import React, {useState} from 'react';
import { View, StyleSheet, Dimensions,Text,TouchableOpacity,Switch } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import EqualizerPage from '../../screens/Equalizer/EqualizerPage';
import Volume from '../../screens/Equalizer/Volume';

const FirstRoute = () => 

(
  
  <View style={[styles.scene, { backgroundColor: '#000000' }]} >
     
   
  <EqualizerPage/>
   
  </View>

);


 
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#000000' }]} >

<Volume/>
</View>
);
 
const initialLayout = { width: Dimensions.get('window').width };


export default function Equalizer() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Equalizer',},
    { key: 'second', title: 'Volume' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  
 
 
  return (
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor:'#000000'}}
    
    />
  
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      paddingLeft: 15
  },
  mainStyle:{
      color:'white',
      fontSize:20,
      padding:25
     },

});