import React, { Component } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,ScrollView,Image,Pressable} from 'react-native';
 import { useNavigation } from '@react-navigation/native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import ContactTile from '../../../components/contactTile';
import Divider from '../../../components/divider'
import UserData from '../data';
import { color } from 'react-native-reanimated';

const Artists = () => {

 const navigation = useNavigation();
  
  return (
    <View>
        
        <View style={{backgroundColor:'#87CEFA'}}>
       {/* body */}
           {/* 1st row */}
        <Pressable style={{ backgroundColor: '#87CEFA', }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}  onPress={() => navigation.navigate('GenresMusic')}   >
            <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
                <View style={styles.squre}>
                <MaterialCommunityIcons name="violin" size={35} color="#fff"/>
                 </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                    <View style={styles.leftcontainer}>
                        <Text style={styles.maintext}>Pop / Rock </Text>
                        <Text style={{ color: 'grey' }}>1 songs</Text>
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
            <Divider/>
        </Pressable>

          {/* 2 nd row */}
          <Pressable style={{ backgroundColor: '#87CEFA', }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}  onPress={() => navigation.navigate('GenresUnknown')}    >
            <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
                <View style={styles.squre}>
                    <MaterialCommunityIcons name="violin" size={35} color="#fff"/>
                 </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                    <View style={styles.leftcontainer}>
                        <Text style={styles.maintext}>unknown </Text>
                        <Text style={{ color: 'grey' }}>15 song </Text>
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

    </View>

  )
};

export default Artists;

const styles = StyleSheet.create({
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
});