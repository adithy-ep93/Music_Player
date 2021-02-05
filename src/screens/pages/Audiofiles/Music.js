import React, { Component,useState } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Colors from '../../../config/colors';

import ContactTile from '../../../components/contactTile';
import OptionCard from '../../../components/option_card';
import Modal from 'react-native-modal';
import UserData from '../data';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const USERS = new UserData();
const Music_item = USERS.Music;
const options = ["Edit", "Shuffle","Add to","Sort by" ]
const Sortby = ["A-Z", "Z-A", "Year","Artist","Album","Folder","Date added","Reverse" ]

const Music = () => {

  const navigation = useNavigation();
  ncost [sortmodalVisible, setSortModal] = useState(false);
  const [optionButtonState, setOptionButtonState] = useState(false);

  const renderItem = ({ item }) => (
    <ContactTile
            data={item.image}
            name={item.name}
            subname={item.message}
            song={item.song}
         
/>
);

  
  return (
    <View style={styles.container}>
         
            
            <View style={{backgroundColor:'#4169E1'}}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                <MaterialIcons name="arrow-back" size={20} color="#fff"/></TouchableOpacity>
                <View style={styles.innerContainer}>
                    <View style={styles.nameContainer}>
                    <Text style={styles.headerHeading}>Music</Text></View></View>
                    <MaterialIcons name="card-giftcard" size={20} color="#fff"/>
                  <TouchableWithoutFeedback>
                    <FontAwesome name="search" size={20} color="#fff"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback   onPress={() => setOptionButtonState(true)}>
                      <Entypo name="dots-three-vertical" size={20} color="#fff" style={{marginRight:16}}/></TouchableWithoutFeedback>
              </View>
             </View> 
     



        {/* body */}
        <View>
            <FlatList
                    data={Music_item}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                  />
                 

                   {/* NewButton */}
              <View style={{marginVertical:450}}>
              <TouchableOpacity  activeOpacity={0.8} style={styles.newIconContainer}  >
              <Image
                style={styles.circle}
                source={require('../../../assests/music/shuffle.jpg')}/>
                </TouchableOpacity></View>

        </View>


            
{/* Optional card */}
<View style={styles.optionCardContainer}>
  {optionButtonState ? <View>
      <OptionCard
          data={options}
          selectedItem={(item) => {
              console.log(item)
              switch (item) {
                  case 'Edit':
                      navigation.navigate('People');
                      setOptionButtonState(false);
                      break;
                  case 'Shuffle':
                      navigation.navigate('Options');
                      setOptionButtonState(false);
                      break;
                  case 'Sort by':
                     setSortModal(true);
                      break;
              }
          }}
      />
  </View> : <View></View>}
 
</View>

{/* sortby moddal */}
  <View>
  <Modal
    isVisible={sortmodalVisible}
    animationIn={'fadeIn'}
    animationOut={'fadeOut'}
    style={{ margin: 1 }}
    backdropOpacity={0}
    onBackdropPress={() => setSortModal(false)}>
    <View style={styles.optionModal}>
      <OptionCard
      data={Sortby}
      selectedItem={(item) => console.log(item)}
/>
  </View>
  </Modal>
</View> 



    
       

    </View>

  )
};

export default Music;

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
         },
 // optionalcard
  optionModal: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  optionButton: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingVertical: 20,
},
optionCardContainer: {
    position: 'absolute',
   
    right: 0,
},
});