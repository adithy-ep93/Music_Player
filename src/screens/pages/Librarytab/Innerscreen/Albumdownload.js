import React, {useState, useEffect} from 'react';
import { View, Text, Image, Platform, StyleSheet, StatusBar, TouchableOpacity,Dimensions,
     ImageBackground,
     ScrollView,FlatList,
    TouchableWithoutFeedback} from 'react-native';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


import ContactTile from '../../../../components/contactTile';
import UserData from '../../data';
import OptionCard from '../../../../components/option_card';
import Modal from 'react-native-modal';




const options = ["Edit", "Shuffle", "Add to","Sort by" ]
const Sortby = ["A-Z", "Z-A", "Year","Artist","Album","Folder","Date added","Reverse" ]
const StatusBarHeight = StatusBar.currentHeight;
const USERS = new UserData();
const Download_item = USERS.Download;

const Download = ({navigation}) =>{
    const [sortmodalVisible, setSortModal] = useState(false);
    const [optionButtonState, setOptionButtonState] = useState(false);
     const [input, setInput] = useState('');
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 10) / 15);
    let imageWidth = dimensions.width;
   
   
    const renderItem = ({ item }) => (
        <ContactTile
                data={item.image}
                name={item.name}
                subname={item.message}
                song={item.song}
             
    />
    );
return(
 <View style={{flex:1, alignItems:'center',paddingTop: StatusBarHeight, backgroundColor:'#87CEFA'}}>
          <ScrollView>
            <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
            
       <View style={{opacity:0.8}}>
            <ImageBackground style={{ height: imageHeight, width: imageWidth }} source={require('../../../../assests/music/album1.png')}>
               
               <TouchableOpacity  onPress={()=> navigation.goBack(null)}>
                    <MaterialIcons name="arrow-back" size={25} color="#fff" style={{marginLeft:16,padding:10}}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',width:150,marginHorizontal:250,top:'-10%'}}>
                            <TouchableOpacity>
                            <FontAwesome name="search" size={25} color="#ffff"  style={{marginHorizontal:25}}/>
                            </TouchableOpacity>  
                            <TouchableOpacity  onPress={() => setOptionButtonState(true)}>
                        <Entypo name="dots-three-vertical" size={25} color="#fff"/>
                        </TouchableOpacity> 
                            </View>
                <Text style={style.head}>Download</Text>
              </ImageBackground>
     </View>


{/* body  */}
        
    {/* FlatList */}
            <FlatList
                    data={Download_item}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                  />
           
</ScrollView>


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
    );
}

export default Download;

const style= StyleSheet.create({
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
    
   
    head:{
        marginLeft:16,
        marginVertical:100,
        fontSize:25,
        fontWeight:'bold',
        color:'#fff',
       
       
    },
   
    button:{
        width:'20%',
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        borderRightColor:'#000',
        borderRightWidth:1,
        borderTopColor:'#dee3de',
        elevation:10
    },
    
    image:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
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