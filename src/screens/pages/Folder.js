import React, { Component,useState } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,FlatList,Image,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import OptionCard from '../../components/option_card';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';

import Divider from '../../components/divider'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const options = ["Sort by" ]
const Sortby = ["A-Z", "Z-A", "Date Added","Track number","Reverse" ]

const Folder = () => {
 
    const [sortmodalVisible, setSortModal] = useState(false);
    const [optionButtonState, setOptionButtonState] = useState(false);
    const navigation = useNavigation();
  
  
  return (
    <View style={{backgroundColor:Colors.primary, height:'100%'}}>
        <View style={styles.container}>
         
            
         <View style={{backgroundColor:Colors.primary}}>
           <View style={styles.headerContainer}>
             <TouchableWithoutFeedback onPress={()=> navigation.goBack(null)}>
             <MaterialIcons name="arrow-back" size={20} color="#fff"/></TouchableWithoutFeedback>
             <View style={styles.innerContainer}>
                 <View style={styles.nameContainer}>
                 <Text style={styles.headerHeading} >Folder</Text></View></View>
             <TouchableWithoutFeedback onPress={()=> navigation.navigate("Searchlibrary")}><FontAwesome name="search" size={20} color="#fff"/></TouchableWithoutFeedback>
             <TouchableWithoutFeedback   onPress={() => setOptionButtonState(true)} >
                 <Entypo name="dots-three-vertical" size={20} color="#fff" style={{marginRight:16}}/>
                 </TouchableWithoutFeedback>
           </View>
          </View> 
  



     {/* body */}
 {/* 1st row */}
     <Pressable style={{ backgroundColor:Colors.primary, }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}  
    //  onPress={() => navigation.navigate('Download')}  
     >
         <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
             <View style={styles.circle}>
                 <Entypo name="folder" size={35} color="#fff"/>
              </View>
             <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                 <View style={styles.leftcontainer}>
                     <Text style={styles.maintext}>Download</Text>
                     <Text style={{ color: 'grey' }}>/storage/0/Download</Text>
                 </View>

                     <View style={{ justifyContent: 'center',}}>
                             <View style={{flexDirection:'row'}}>
                             <Text style={styles.right}>5 songs</Text> 
                             <TouchableOpacity>
                             <Entypo name="dots-three-vertical" size={20} color="#fff"/>
                             </TouchableOpacity>
                             </View>
                     </View>
             </View>
         </View>
         <Divider/>
     </Pressable>

{/* 2nd row */}
     <Pressable style={{ backgroundColor: Colors.primary, }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} 
    //  onPress={() => navigation.navigate('Music')}  
     >
         <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
             <View style={styles.circle}>
             <Entypo name="folder" size={35} color="#fff"/>
              </View>
             <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                 <View style={styles.leftcontainer}>
                     <Text style={styles.maintext}>Music</Text>
                     <Text style={{ color: 'grey' }}>/data/hw_init../Music</Text>
                 </View>

                     <View style={{ justifyContent: 'center',}}>
                             <View style={{flexDirection:'row'}}>
                             <Text style={styles.right}>1 songs</Text> 
                             <Entypo name="dots-three-vertical" size={20} color="#fff"/>
                             </View>
                     </View>
             </View>
         </View>
         <Divider/>
     </Pressable>


     {/* 3rd row */}
     <Pressable style={{ backgroundColor:Colors.primary, }} android_ripple={{ color: 'rgba(0,0,0,0.1)'}} 
    //  onPress={() => navigation.navigate('Sound')} 
      >
         <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
             <View style={styles.circle}>
             <Entypo name="folder" size={35} color="#fff"/>
              </View>
             <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                 <View style={styles.leftcontainer}>
                     <Text style={styles.maintext}>Sound</Text>
                     <Text style={{ color: 'grey' }}>/storage/emu..ed/0/Sound</Text>
                 </View>

                     <View style={{ justifyContent: 'center',}}>
                             <View style={{flexDirection:'row'}}>
                             <Text style={styles.right}>6 songs</Text> 
                             <Entypo name="dots-three-vertical" size={20} color="#fff"/>
                             </View>
                     </View>
             </View>
         </View>
         <Divider/>
     </Pressable>

{/* 4th row */}

<Pressable style={{ backgroundColor: Colors.primary, }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} 
// onPress={() => navigation.navigate('WhatsAppAudio')}  
>
         <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
             <View style={styles.circle}>
             <Entypo name="folder" size={35} color="#fff"/>
             </View>
             <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                 <View style={styles.leftcontainer}>
                     <Text style={styles.maintext}>WhatsApp Audio</Text>
                     <Text style={{ color: 'grey' }}>/storage/emu..tsApp Audio</Text>
                 </View>

                     <View style={{ justifyContent: 'center',}}>
                             <View style={{flexDirection:'row'}}>
                             <Text style={styles.right}>5 songs</Text> 
                             <Entypo name="dots-three-vertical" size={20} color="#fff"/>
                             </View>
                     </View>
             </View>
         </View>
         <Divider/>
     </Pressable>


              {/* NewButton */}
              <View style={{marginVertical:200}}>
           <TouchableOpacity  activeOpacity={0.8} style={styles.newIconContainer}  >
           <Image
             style={styles.circle1}
             source={require('../../assets/music/shuffle.jpg')}/>
             </TouchableOpacity></View>





{/* Optional card */}


    
<View style={styles.optionCardContainer}>
             {optionButtonState ? <View>
                 <OptionCard
                     data={options}
                     selectedItem={(item) => {
                         console.log(item)
                         switch (item) {
                            case 'Sort by':
                             setSortModal(true);
                                 break;
                         }
                     }}
                 />
             </View> : <View></View>}
         </View>
{/* sort modal */}
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

    </View>
  )
};

export default Folder;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'},
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    backgroundColor:Colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingLeft: 15,
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

 list:{
        backgroundColor:Colors.primary,
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
  circle: {
      
      height: 50,
      width: 50,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15
  },
  nameLetter: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
  },
  maintext:{
      color:'#fff'
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
circle1:{
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