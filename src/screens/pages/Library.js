import React, { Component } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,ScrollView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import ContactTile from '../../components/contactTile';
import Colors from '../../config/colors';

import UserData from './data';
const USERS = new UserData();
const Frequent_Users = USERS.FrequentUsers;


const Library = () => {

  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <ContactTile
        data={item.image}
        name={item.name}
        subname={item.message}
       
    />
);

  
  return (
    <View>
        
     <View style={styles.container}>

            {/*Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity>
           <MaterialIcons name="arrow-back" size={20} color="#fff"/></TouchableOpacity>
            <View style={styles.innerContainer}>
                <View style={styles.nameContainer}>
                  <Text style={styles.headerHeading} >Library</Text></View>
            </View>
            <TouchableOpacity><MaterialIcons name="card-giftcard" size={20} color="#fff"/></TouchableOpacity>
             <TouchableOpacity><FontAwesome name="search" size={20} color="#fff"/></TouchableOpacity>
             <TouchableOpacity><Entypo name="dots-three-vertical" size={20} color="#fff" style={{marginRight:16}}/></TouchableOpacity>
        </View>
              {/*TAB */}
        <View style={{backgroundColor:'#4682B4',flexDirection:'row', justifyContent:'space-evenly',marginVertical:15}}>
              <TouchableOpacity  >
                <Text style={{color:'yellow'}}>TRACKS</Text>
                </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Theme')} 
               >
                <Text style={styles.tab}>THEME</Text>
              </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('Folder')} 
                style={styles.button}>
              <Text style={styles.tab}>FOLDER</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigation.navigate('RecentAdd')} 
                style={styles.button}>
              <Text style={styles.tab}>RecentAdd</Text>
              </TouchableOpacity>
              
              <TouchableOpacity  onPress={() => navigation.navigate('Settings')} 
                style={styles.button}>
              <Text style={styles.tab}>SETTINGS</Text>
              </TouchableOpacity>
              
              
      </View>

              
     



        {/* body */}
      
            <FlatList
                data={Frequent_Users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                style={styles.list}
            />
                
     
          </View>
           

                {/* NewButton */}
          <View>
            <TouchableOpacity  activeOpacity={0.8} style={styles.newIconContainer}>
              <Image
                style={styles.circle}
                source={require('../../assets/music/shuffle.jpg')}/>
            </TouchableOpacity></View>
       

    </View>

  )
};

export default Library;

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.primary,
    flex:1,
    flexDirection:'column'
},
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    // backgroundColor: colors.primary,
    backgroundColor:'#4682B4',
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
   tab:{
        fontSize:16,
        color:'#fff'
      },
   list:{
        backgroundColor:'#87CEFA'
      },
   newIconContainer: {
        position: 'absolute',
        bottom: 40,
        right: 15,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
       
      },
 circle:{
        width: 50,
        height: 50,
        borderRadius: 50 / 1,
       
      }
});