import React, { Component,useState } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,TouchableWithoutFeedback,FlatList,ScrollView,Image,StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import ContactTile from '../../components/contactTile';
import OptionCard from '../../components/option_card';
import Modal from 'react-native-modal';

import Colors from '../../config/colors';

import UserData from './data';


const USERS = new UserData();
const   Recent_item = USERS.RecentAdd;
const options = ["Edit", "Shuffle", "Sort by" ]
const Sortby = ["A-Z", "Z-A", "Year","Artist","Album","Folder","Date added","Reverse" ]


const RecentAdd = () => {

  const [sortmodalVisible, setSortModal] = useState(false);
  const [optionButtonState, setOptionButtonState] = useState(false);

  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <ContactTile
        data={item.image}
        name={item.name}
        subname={item.message}
       
       
    />
);

  
  return (
    <View style={styles.container}>
      
     <View style={{height:'100%',backgroundColor:Colors.primary}}>

            {/*Header */}
        <View style={styles.headerContainer}>
        <TouchableWithoutFeedback  onPress={()=> navigation.goBack(null)}>
              <MaterialIcons name="arrow-back" size={20} color="#fff"/></TouchableWithoutFeedback>
            <View style={styles.innerContainer}>
                <View style={styles.nameContainer}>
                  <Text style={styles.headerHeading}>Recent Add</Text></View>
            </View>
            <TouchableWithoutFeedback onPress={()=> navigation.navigate("Aads")}>
                <MaterialIcons name="card-giftcard" size={20} color="#fff"/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> navigation.navigate("Searchlibrary")}>
                <FontAwesome name="search" size={20} color="#fff"/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback 
           onPress={() => setOptionButtonState(true)}
            >
            <Entypo name="dots-three-vertical" size={20} color="#fff" style={{marginRight:16}}/>
            </TouchableWithoutFeedback>
        </View>
        



        
      
            <FlatList
                data={Recent_item}
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



{/* Optional card */}
    <View style={styles.optionCardContainer}>
  
      
                {optionButtonState ? <View>
                    <OptionCard
                        data={options}
                      //   selectedItem={(item) => {
                      //       console.log(item)
                      //       switch (item) {
                      //           case 'Edit':
                      //               navigation.navigate(null);
                      //               setOptionButtonState(false);
                      //               break;
                      //           case 'Shuffle':
                      //               navigation.navigate(null);
                      //               setOptionButtonState(false);
                      //               break;
                      //           case 'Sort by':
                      //              setSortModal(true);
                      //               break;
                      //       }
                      //   }
                      // }
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

export default RecentAdd;

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
    backgroundColor:Colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingLeft: 15
},
  headerHeading: {
          fontSize: 20,
          color: '#fff',
          
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
        backgroundColor:Colors.primary
      },
   newIconContainer: {
        position: 'absolute',
        bottom: 40,
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