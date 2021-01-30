import React, { Component } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import ContactTile from '../../components/contactTile';

import UserData from './data';
import { ScrollView } from 'react-native-gesture-handler';

const USERS = new UserData();
const Folder_item = USERS.Folder;


const Folder = () => {

  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <ContactTile
            data={item.image}
            name={item.name}
            subname={item.message}
            song={item.song}
            onPress={() => navigation.navigate('Download')}
/>
);

  
  return (
    <View style={{backgroundColor:'#87CEFA',flex:1,flexDirection:'column'}}>
         
            
            <View style={{backgroundColor:'#4169E1'}}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                <MaterialIcons name="arrow-back" size={20} color="#fff"/></TouchableOpacity>
                <View style={styles.innerContainer}>
                    <View style={styles.nameContainer}>
                    <Text style={styles.headerHeading} >FOLDER</Text></View></View>
                <FontAwesome name="search" size={20} color="#fff"/>
                <Entypo name="dots-three-vertical" size={20} color="#fff" style={{marginRight:16}}/>
              </View>
             </View> 
     



        {/* body */}
        <View>
            <FlatList
                    data={Folder_item}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                  />
                 

                   {/* NewButton */}
              <View  style={{marginVertical:50}}>
              <TouchableOpacity  activeOpacity={0.8} style={styles.newIconContainer}  >
              <Image
                style={styles.circle}
                source={require('../../assets/music/shuffle.jpg')}/>
                </TouchableOpacity></View>

        </View>


       

    
       

    </View>

  )
};

export default Folder;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    backgroundColor:'#4169E1',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingLeft: 15
    },
 headerHeading: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
        },
        nameContainer: {
        marginLeft: 16,

        },
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '50%',
        },

     list:{
        backgroundColor:'#87CEFA'
        },
     newIconContainer: {
      position: 'absolute',
      bottom: '50%',
      right: 15,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
           
           
        },
  circle:{
            width: 50,
            height: 50,
            borderRadius: 50 / 1,
            
        }
});