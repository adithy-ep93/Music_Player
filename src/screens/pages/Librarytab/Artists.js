import React, { Component,useState } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,ScrollView,Image,Pressable} from 'react-native';
 import { useNavigation } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

import Colors from '../../../config/colors';

import ContactTile from '../../../components/contactTile';
import Divider from '../../../components/divider'
import UserData from '../data';
import { color } from 'react-native-reanimated';

const Artists = () => {
  
  const navigation = useNavigation();
  
  return (
    <View>
        <ScrollView>
     <View style={{backgroundColor:'#87CEFA'}}>
       {/* body */}
           {/* 1st row */}
        <Pressable style={{ backgroundColor: '#87CEFA', }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}   onPress={() => navigation.navigate('Unknown')}  >
            <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
                <View style={styles.squre}>
                    <Octicons name="person" size={35} color="#fff"/>
                 </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                    <View style={styles.leftcontainer}>
                        <Text style={styles.maintext}> unknown </Text>
                        <Text style={{ color: 'grey' }}>14 songs | 3 albums</Text>
                    </View>
               <View style={{ justifyContent: 'center',}}>
                                <View style={{flexDirection:'row'}}>
                                <TouchableOpacity >
                                <Entypo name="dots-three-vertical" size={20} color="#fff"/>
                                </TouchableOpacity>
                                </View>
                        </View>
                </View>
            </View>
            <Divider/>
        </Pressable>

          {/* 2 nd row */}
          <Pressable style={{ backgroundColor: '#87CEFA', }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} onPress={() => navigation.navigate('Secondpage')}   >
            <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
                <View style={styles.squre}>
                <Octicons name="person" size={35} color="#fff"/>
                 </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                    <View style={styles.leftcontainer}>
                        <Text style={styles.maintext}> BHADRAA BOYS </Text>
                        <Text style={{ color: 'grey' }}>1 song | 1 albums</Text>
                    </View>
               <View style={{ justifyContent: 'center',}}>
                                <View style={{flexDirection:'row'}}>
                                <TouchableOpacity>
                                <Entypo name="dots-three-vertical" size={20} color="#fff"/>
                                </TouchableOpacity>
                                </View>
                        </View>
                </View>
            </View>
            
        </Pressable>
           



                {/* NewButton */}
          <View style={{marginVertical:250}}>
            <TouchableOpacity  activeOpacity={0.8} style={styles.newIconContainer}>
              <Image
                style={styles.circle}
                source={require('../../../assests/music/shuffle.jpg')}/>
            </TouchableOpacity></View>
       
    </View>





      
    </ScrollView>
    </View>

  )
};

export default Artists;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#87CEFA',
    flex:1,
    flexDirection:'column'
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
       
      },
    //pressable
    leftcontainer: {
      padding: 5,
      paddingLeft: 10,
      alignItems: 'flex-start',
      justifyContent: 'center',
  },
  imageicon: {
      width: 50,
      height: 50,
      
  },
  right: {
      color: 'grey',
      alignSelf: 'center',
      marginRight:5

  },
  squre: {
      
      height: 50,
      width: 50,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
      backgroundColor:'grey',
      opacity:0.5

  },
 maintext:{
      color:'#fff'
  },
  // model

  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
},
itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center'
},
itemText: {
    fontSize: 16,
    marginLeft: 20
},
newItemText: {
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 4,
    borderColor:Colors.primary,
    paddingHorizontal: 4,
    paddingLeft: 6,
    marginLeft: 10,
    color: Colors.primary,
    fontWeight: 'bold'
  },

});