import React, { Component } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,ScrollView,Image} from 'react-native';
// import { useNavigation } from '@react-navigation/native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import ContactTile from '../../../components/contactTile';
import UserData from '../data';

const USERS = new UserData();
const Frequent_Users = USERS.FrequentUsers;
const Tracks = () => {

  // const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <ContactTile
        data={item.image}
        name={item.name}
        subname={item.message}
       
    />
);

  
  return (
    <View>
        
     <View style={{height:'100%',}}>
<FlatList
                data={Frequent_Users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
               
            />
           </View>
           

                {/* NewButton */}
          <View>
            <TouchableOpacity  activeOpacity={0.8} style={styles.newIconContainer}>
              <Image
                style={styles.circle}
                source={require('../../../assets/music/shuffle.jpg')}/>
            </TouchableOpacity></View>
       

    </View>

  )
};

export default Tracks;

const styles = StyleSheet.create({
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