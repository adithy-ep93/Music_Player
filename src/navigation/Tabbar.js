
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text,View,SafeAreaView,StyleSheet,TouchableWithoutFeedback,FlatList,ScrollView,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../config/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


import Tracks from '../screens/pages/Librarytab/Tracks';
import Albums from '../screens/pages/Librarytab/Albums'
import Artists from '../screens/pages/Librarytab/Artists';
import Genres from '../screens/pages/Librarytab/genres';

import Unknown from '../screens/pages/Librarytab/Innerscreen/unkown';
import Secondpage from '../screens/pages/Librarytab/Innerscreen/Secondpage';
import DownloadAlbum from '../screens/pages/Librarytab/Innerscreen/Albumdownload';
import SoundAlbum from '../screens/pages/Librarytab/Innerscreen/Albumsound';
import WhatsappAlbum from '../screens/pages/Librarytab/Innerscreen/AlbumWhatsApp';
import GenresMusic from '../screens/pages/Librarytab/Innerscreen/GenresMusic';
import  GenresUnknown from '../screens/pages/Librarytab/Innerscreen/Genresunknown';
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
 
  return (
    <Tab.Navigator
        tabBarOptions={{
        activeTintColor: '#CC9900',
        inactiveTintColor: '#F8F8F8',
        style: {
            backgroundColor: Colors.primary},
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#CC9900',
          borderBottomWidth: 2,
        },

      }}>
    <Tab.Screen  name="Tracks" component={Tracks} options={{ tabBarLabel: 'TRACKS',}}  />
    <Tab.Screen  name="Artists"  component={Artists}  options={{ tabBarLabel: 'ARTISTS',}}  />
    <Tab.Screen name="Albums" component={Albums} options={{ tabBarLabel: 'Albums', }} />
    <Tab.Screen  name="Genres"  component={Genres}    options={{ tabBarLabel: 'GENRES',}}  />
    

    </Tab.Navigator>
  );
}

function Tabnavigation() {
  const navigation = useNavigation();
  return (
   
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: Colors.primary },
    headerTintColor: "#fff"
    }} initialRouteName ={Albums}>
        <Stack.Screen name="Library" component={TabStack}  
        
         options={{
             headerLeft:()=>
             <TouchableWithoutFeedback  onPress={()=> navigation.goBack(null)}>
                 <MaterialIcons name="arrow-back" size={20} color="#fff" style={{marginLeft:16}}/>
             </TouchableWithoutFeedback>,
            headerRight: () =>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <TouchableWithoutFeedback onPress={()=> navigation.navigate("Aads")}>
                 <MaterialIcons name="card-giftcard" size={20} color="#fff" style={{marginRight:16}}/>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback><FontAwesome name="search" size={20} color="#fff"  style={{marginRight:16}}/></TouchableWithoutFeedback>
               <TouchableWithoutFeedback onPress={()=>navigation.navigate("Searchlibrary")}>
                 <Entypo name="dots-three-vertical" size={20} color="#fff" style={{marginRight:16}}/>
               </TouchableWithoutFeedback>
             </View>

             
          }}
        />
         <Stack.Screen name="Unknown" component={Unknown} options={{ headerShown: false }}  />
         <Stack.Screen name="Secondpage" component={Secondpage} options={{ headerShown: false }}  />
         <Stack.Screen name="DownloadAlbum" component={DownloadAlbum} options={{ headerShown: false }}  />
         <Stack.Screen name="SoundAlbum" component={SoundAlbum} options={{ headerShown: false }}  />
         <Stack.Screen name="WhatsappAlbum" component={WhatsappAlbum} options={{ headerShown: false }}  />
         <Stack.Screen name="GenresMusic" component={GenresMusic} options={{ headerShown: false }}  />
         <Stack.Screen name="GenresUnknown" component={GenresUnknown} options={{ headerShown: false }}  />
        

      </Stack.Navigator>
    
  );
}

export default Tabnavigation;