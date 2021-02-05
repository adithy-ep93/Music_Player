
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import EqualizerPage from './EqualizerPage';
import Volume from './Volume';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#4285f4',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>

          
          
      <Tab.Screen name="Equalizer" component={EqualizerPage} options={{tabBarLabel: 'Equalizer',}}  />
      <Tab.Screen name="Volume"  component={Volume} options={{tabBarLabel: 'Volume',}} />
    </Tab.Navigator>
  );
}

function EqualizerVolume({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Equalizer"
        screenOptions={{
          headerStyle: { backgroundColor: '#4285f4', },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          
        }}>
        <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Equlizer', headerLeft: () => (
             <TouchableOpacity onPress={()=> navigation.goBack(null)}>
             <MaterialIcons name="arrow-back" size={25} color="#fff"  style={{paddingLeft:20}}/>
              </TouchableOpacity>
          ), }}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}

export default EqualizerVolume;