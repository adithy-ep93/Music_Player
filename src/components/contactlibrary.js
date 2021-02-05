import React,{useState} from 'react';
import { StyleSheet, Text, TextInput,View, Image, Pressable,TouchableOpacity,ScrollView} from 'react-native';
import mainStyle from '../config/styles';
import CheckBox from '@react-native-community/checkbox';
import Entypo from 'react-native-vector-icons/Entypo';
import DividerTile from './divider';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import RoundCheckbox from 'rn-round-checkbox';
//import Stacknavigation from '../navigation/Stacknavigation';


const Stack = createStackNavigator();

const ContactTile = ({ data, id,name, subname,size,time,album,artist,genre, rightname, onPress,navigation}) => {
    const [customModalVisible, setcustomModalVisible] = useState(false);
    const [editModalVisible, seteditModalVisible] = useState(false);
    const [artworkModalVisible, setartworkModalVisible] = useState(false);
    const [pickgalleryModalVisible, setpickgalleryModalVisible] = useState(false);
    const [shareModalVisible, setshareModalVisible] = useState(false);
    const [deletesModalVisible, setdeletesModalVisible] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleRoundCheckbox, setToggleRoundCheckbox] = useState(false)
    const [checked, setChecked] = React.useState('false');
    const [formData, setfromData ]=useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const toggleSwitchOn = () => setIsEnabled((previousState) => previousState);
    function onSwitch  (){
        data2 (false);
       
    }
    function setSelectionr(){
        setSelection(true)
    }
    function custom(){
        
        setcustomModalVisible(true);
        //setcustomModalVisible(false);
       /* seteditModalVisible(false);
        setartworkModalVisible(false);
        setpickgalleryModalVisible(false);
        setdeletesModalVisible(false);*/
    };
    function edit(){
        
        seteditModalVisible(true);
        //setcustomModalVisible(false);
       // customModalVisible(false)

       /* setcustomModalVisible(false);
        seteditModalVisible(false);
        setartworkModalVisible(false);
        setpickgalleryModalVisible(false);
        setdeletesModalVisible(false);*/
    };
    function artwork(){
       // setartworkModalVisible(false);
        setartworkModalVisible(true);
       /* setcustomModalVisible(false);
        seteditModalVisible(false);
        setartworkModalVisible(false);
        setpickgalleryModalVisible(false);
        setdeletesModalVisible(false);*/
    };
    function pickgallery(){
        //setpickgalleryModalVisible(false);
        setpickgalleryModalVisible(true);
       /* setcustomModalVisible(false);
        seteditModalVisible(false);
        setartworkModalVisible(false);
        setpickgalleryModalVisible(false);
        setdeletesModalVisible(false);*/
    };
    function share(){
        //setshareModalVisible(false);
        setshareModalVisible(true);
        /*setcustomModalVisible(false);
        seteditModalVisible(false);
        setartworkModalVisible(false);
        setpickgalleryModalVisible(false);
        setdeletesModalVisible(false);*/
    };
    function deletes(){
        //setcustomModalVisible(false);
       // setdeletesModalVisible(false);
        setdeletesModalVisible(true);
       // setcustomModalVisible(false);
       // seteditModalVisible(false);
       // setartworkModalVisible(false);
       // setpickgalleryModalVisible(false);
       // setdeletesModalVisible(false);
    };
   
    return (
    <Pressable style={{ backgroundColor: 'steelblue', }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} onPress={onPress}>
        <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
            <View style={styles.circle}>
                {data ? <Image style={styles.imageicon} source={data} /> : <Text style={styles.nameLetter}>{name[0]}</Text>}
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 10,paddingTop:10,paddingBottom:10 }}>
                <View style={styles.leftcontainer}>
                    <Text style={{ color: 'white',fontWeight:"bold",fontSize: 18,paddingLeft:20 }}>{name}</Text>
                    <Text style={{ color: 'white',fontSize: 15,paddingLeft:20 }}>{subname}</Text>
                </View>
                <TouchableOpacity >
                    <Entypo name='dots-three-vertical'style={{color:"white",paddingTop:17,paddingRight:1}} size={20} onPress={() =>custom()}/>
                </TouchableOpacity>

                {/* Main modal for icons starts here */}                    
                <Modal
                isVisible={customModalVisible}
                style={{ margin: 0 }}
                backdropOpacity={0.3}
                transparent={true}
                // animationIn={''}
                // animationOut={'slideOutRight'}
                onBackdropPress={() => setcustomModalVisible(false)}
                onBackButtonPress={() => setcustomModalVisible(false)}
                >
                <View style={styles.bottomModal}>
                    <View style={{flex:1,flexDirection:"row",justifyContent:"center", paddingTop:25}}>
                        <View>
                            <TouchableOpacity onPress={() =>edit()}>
                                <Text style={{color:"white",alignSelf:"center", fontSize: 19 }} >00{id}.{name}</Text>
                            </TouchableOpacity>

                                {/* Modal for editing section starts here */}                               
                                <Modal
                                isVisible={editModalVisible}
                                style={{ marginTop: '20%',marginBottom:'20%',marginLeft:'5%',marginRight:'5%',height:100, justifyContent: 'flex-end', }}
                                backdropOpacity={0.3}
                                avoidKeyboard={false}
                                transparent={true}
                                //animationInTiming={100}
                               // animationOutTiming={100}
                                onBackdropPress={() => seteditModalVisible(false)}
                                // onBackdropPress={() => setcustomModalVisible(false)}
                                >
                                <View style={styles.editModal}>
                                    <Text style={{ color: 'black', fontSize: 22,fontWeight:"700",alignItems:"center",justifyContent:"center" }}>Details</Text>
                                    <View style={{flex:1,flexDirection:"row",paddingTop:20,alignItems:"center"}}>
                                        <Text style={{fontSize:18}}>Path:</Text>
                                        <Text style={{fontSize:18,paddingLeft:10}}>{rightname}</Text>   
                                    </View>
                                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                                        <Text style={{fontSize:18}}>Size :</Text>
                                        <Text style={{fontSize:18,paddingLeft:10}}>{size}</Text> 
                                        <Text style={{fontSize:18,paddingLeft:20}}>Time:</Text>
                                        <Text style={{fontSize:18,paddingLeft:10}}>{time}</Text> 
                                    </View>
                                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                                        <Text style={{fontSize:17}}>Title:</Text>
                                        <TextInput style={{fontSize:17,paddingLeft:10}} underlineColorAndroid='default'>{id}.{name}</TextInput>   
                                    </View>
                                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                                        <Text style={{fontSize:17}}>Album:</Text>
                                        <TextInput style={{fontSize:17,paddingLeft:10}} underlineColorAndroid='default'>{album}</TextInput>   
                                    </View>
                                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                                        <Text style={{fontSize:17}}>Artist:</Text>
                                        <TextInput style={{fontSize:17,paddingLeft:10}} underlineColorAndroid='default'>{artist}</TextInput>   
                                    </View>
                                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                                        <Text style={{fontSize:17}}>Genre:</Text>
                                        <TextInput style={{fontSize:17,paddingLeft:10}} underlineColorAndroid='default'>{genre}</TextInput>   
                                    </View>
                                    <View style={{flex:1,flexDirection:"row",alignItems:"flex-end",paddingLeft:'20%'}}>
                                        <TouchableOpacity onPress={()=> seteditModalVisible(false)}>
                                            <Text style={{color:'steelblue',paddingTop:'5%',paddingRight:10,paddingLeft:'50%',fontWeight:"bold"}}>CANCEL</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={{paddingRight:10,paddingLeft:10,color:'steelblue',fontWeight:"bold"}}>SAVE</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                </Modal>
                                {/* Modal for editing section ends here*/}

                        </View>
                        <View style={{paddingLeft:8}}>
                            <TouchableOpacity onPress={() =>edit()}>
                                    <Ionicons name='alert-circle-outline'style={{color:"white",transform: [{ rotate: '180deg' }]}} size={25}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Header section of icons modal ends here */}

                    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignContent:"center",alignItems:"center"}}>                      
                        <View style={{paddingRight:10,paddingLeft:20}}>
                            <TouchableOpacity>
                                <Ionicons name='md-play-skip-forward-outline'  style={{color:"white",paddingRight:10,paddingTop:1,paddingLeft:12}} size={25}/>
                                <Text style={{color:"white",fontSize:16,paddingTop:9}}>Play next</Text>   
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingRight:10,paddingLeft:20}}>
                            <TouchableOpacity>
                                <FontAwesome name='plus-square-o'  style={{color:"white",paddingRight:10,paddingLeft:12,paddingTop:3}} size={25}/>
                                <Text style={{color:"white",fontSize:16,paddingTop:9}}>Add to</Text>   
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingRight:10,paddingLeft:20}}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='playlist-plus' size={32} style={{color:"white",paddingLeft:12,paddingRight:10}}/>
                                <Text style={{color:"white",fontSize:16,paddingTop:5}}>Enqueue</Text>   
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingRight:20,paddingLeft:20}}>
                            <TouchableOpacity>
                                <EvilIcons name='bell' size={35} style={{color:"white",paddingRight:10,paddingLeft:12}} />
                                <Text style={{color:"white",fontSize:16,paddingTop:9}}>Ringtone</Text>   
                            </TouchableOpacity>
                        </View>
                    </View>

                   
                    <View style={{flex:1,flexDirection:"row",justifyContent:"center",paddingTop:20,paddingBottom:20}}>                      
                         {/* Trim part starts here */}
                        <View style={{paddingRight:10,paddingLeft:5}}>
                            <TouchableOpacity>
                                <Fontisto name='scissors'  style={{color:"white",paddingRight:10,paddingTop:1,paddingLeft:10}} size={25}/>
                                <Text style={{color:"white",fontSize:16,paddingTop:9}}> Trim  </Text>   
                            </TouchableOpacity>
                        </View>
                         {/* Trim part ends here */}

                        {/* Artwork parts starts here */}
                        <View style={{paddingRight:10,paddingLeft:20}}>
                            <TouchableOpacity onPress={() =>artwork()}>
                                <Feather name='image'  style={{color:"white",paddingRight:10,paddingLeft:25,paddingTop:3}} size={25}/>
                                <Text style={{color:"white",fontSize:16,paddingTop:9}}>  Artwork</Text>   
                            </TouchableOpacity>

                            {/* Modal for artwork section starts here */}                              
                            <Modal
                            animationType="slide"
                            isVisible={artworkModalVisible}
                            style={{ margin: 0 }}
                            backdropOpacity={0.3}
                            // animationIn={''}
                            // animationOut={'slideOutRight'}
                            
                            onBackdropPress={() => setartworkModalVisible(false)}
                            onBackButtonPress={() => setartworkModalVisible(false)}
                            >
                            <View style={styles.artworkModal}>
                                <View style={{marginLeft:'5%',marginBottom:"1%"}}>
                                    <Text style={{ color: 'white', fontSize: 22,fontWeight:"bold",marginTop:"6%"}}>Artwork</Text>
                                    <View style={{flex:1,paddingTop:20}}>
                                        <Text style={{fontSize:18,color: 'white',}}>Reset</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Pickfromnet')}>
                                            <Text style={{fontSize:18,color: 'white',}}>Pick from Internet</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1,flexDirection:"row"}}>
                                        <TouchableOpacity onPress={() =>pickgallery()}>
                                            <Text style={{fontSize:17,color: 'white',}}>Pick from gallery</Text>
                                        </TouchableOpacity>

                                        {/* Modal for pickgallery section starts here */}
                                        <Modal
                                        isVisible={pickgalleryModalVisible}
                                        style={{ margin: 1,borderRadius:0.9}}
                                        backdropOpacity={0.3}
                                        // animationIn={''}
                                        // animationOut={'slideOutRight'}
                                        onBackdropPress={() => setpickgalleryModalVisible(false)}
                                        onBackButtonPress={() => setpickgalleryModalVisible(false)}
                                        >
                                        <View style={styles.pickgalleryModal}>
                                            <View style={{marginBottom:"1%",alignItems:"center",justifyContent:"center"}}>
                                                <Text style={{ color: 'black', fontSize: 18,marginTop:"6%",alignContent:"center"}}>Complete action using</Text>
                                                <View style={{flex:1,paddingTop:10,flexDirection:"row",marginLeft:"10%",marginRight:"10%",marginBottom:"10%",marginTop:"5%",marginVertical:"5%",marginHorizontal:"5%",justifyContent:"space-between"}}>
                                                    <View style={{paddingRight:10,alignItems:"center"}}>
                                                        <Image  style={{width: 45,height: 48,}} source={require('../assets/contact_images/g.png')}/>
                                                        <Text style={{paddingTop:10}}>Gallery</Text>
                                                    </View>
                                                    <View style={{paddingRight:10,alignItems:"center"}}>
                                                        <Image  style={{width: 45,height: 48,}} source={require('../assets/contact_images/file.png')}/>
                                                        <Text style={{paddingTop:10}}>File Manager</Text>
                                                    </View>
                                                    <View style={{paddingRight:10,alignItems:"center"}}>
                                                        <Image  style={{width: 45,height: 48,}} source={require('../assets/contact_images/malayalam.png')}/> 
                                                        <Text style={{paddingTop:10}}>Malayalam {'\n'}   Stickers</Text>
                                                    </View>
                                                    <View style={{alignItems:"center"}}>
                                                        <Image  style={{width: 45,height: 48,}} source={require('../assets/contact_images/photos.png')}/>
                                                        <Text style={{paddingTop:10}}>Photos</Text>
                                                    </View>
                                                    </View>
                                                     <View style={{flex:1,flexDirection:"row",paddingBottom:"5%",marginTop:"2%",justifyContent:"space-between",paddingTop:29,marginRight:110}}>
                                                     
                                                     <CheckBox disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>              
                                                       <Text style={{fontSize:15,paddingLeft:4,paddingTop:5}}>Remember my choice</Text>
                                                        
                                                    </View>
                                                   
                                                    <View style={{width:250,borderRadius:40,height:40,borderColor:"whitesmoke",backgroundColor:"whitesmoke",justifyContent:"center",borderWidth:1,marginBottom:"7%"}}>
                                                        <TouchableOpacity onPress={()=> setpickgalleryModalVisible(false)}>
                                                            <Text style={{fontSize:18,color:"black",alignSelf:"center"}}>Cancel</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>  
                                            </View>
                                        </Modal>
                                        {/* Modal for pickgallery section ends here*/}

                                    </View>
                                </View>
                            </View>
                            </Modal>
                           {/* Modal for artwork section ends here*/}

                        </View>
                        {/* Artwork parts ends here */}

                        {/* Share parts starts here */}
                        <View style={{paddingRight:10,paddingLeft:20}}>
                            <TouchableOpacity onPress={() =>share()}>
                                <EvilIcons name='share-google' size={38} style={{color:"white",paddingLeft:12,paddingRight:10}}/>
                                <Text style={{color:"white",fontSize:16,paddingTop:10}}>  Share</Text>   
                            </TouchableOpacity>

                            {/* Modal for share section starts here */}                                
                            <Modal
                            isVisible={shareModalVisible}
                            style={{ margin: 1,borderRadius:0.9}}
                            backdropOpacity={0.3}
                            // animationIn={''}
                            // animationOut={'slideOutRight'}
                            onBackdropPress={() => setshareModalVisible(false)}
                            onBackButtonPress={() => setshareModalVisible(false)}
                            >
                            <View style={styles.shareModal}>
                                <View style={{alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{ color: 'black', fontSize: 18,marginTop:"6%",alignContent:"center"}}>Share</Text>
                                    
                                    <View style={{flex:1,paddingTop:10,flexDirection:"row",marginRight:"4%",marginBottom:"10%",marginTop:"5%",justifyContent:"space-between"}}>
                                       
                                        <View style={{marginRight:15,alignItems:"center",marginLeft:0}}>
                                            <Image  style={{width: 47,height: 50,}} source={require('../assets/contact_images/whatsapp.png')}/>
                                            <Text style={{paddingTop:10}}>Whatspp</Text>
                                        </View>
                                        <View style={{marginRight:20,paddingRight:10,alignItems:"center",marginLeft:20}}>
                                            <Image  style={{width: 50,height: 50,}} source={require('../assets/contact_images/gmail.png')}/> 
                                            <Text style={{paddingTop:10}}>Gmail</Text>
                                        </View>
                                        <View style={{paddingRight:10,marginRight:20,alignItems:"center"}}>
                                            <Image  style={{width: 50,height: 50,}} source={require('../assets/contact_images/file1.png')}/>
                                            <Text style={{paddingTop:10}}>Copy to</Text>
                                        </View>
                                        <View style={{alignItems:"center"}}>
                                            <Image  style={{width: 50,height: 50,}} source={require('../assets/contact_images/drive.png')}/>
                                            <Text style={{paddingTop:10}}>Drive</Text>
                                        </View>
                                    </View>

                                    <View style={{flex:1,paddingBottom:"2%",flexDirection:"row",marginRight:"1%",justifyContent:"space-between"}}>
                                        <View style={{marginLeft:0,alignItems:"center",marginRight:10}}>
                                            <Image  style={{width: 50,height: 50,}} source={require('../assets/contact_images/mailer.png')}/>
                                            <Text style={{paddingTop:10}}>Mail</Text>
                                        </View>
                                        <View style={{alignItems:"center",marginLeft:8,marginRight:10}}>
                                            <Image  style={{width: 50,height: 50,}} source={require('../assets/contact_images/wps.png')}/> 
                                            <Text numberOfLines={2}  style={{paddingTop:10,alignSelf:"center",justifyContent:"center"}}>Save to WPS {'\n'}     Cloud</Text>
                                        </View>
                                        <View style={{alignItems:"center"}}>
                                            <Image  style={{width: 50,height: 50,}} source={require('../assets/contact_images/bluetooth1.png')}/>
                                            <Text style={{paddingTop:10}}>Bluetooth</Text>
                                        </View>
                                        <View style={{alignItems:"center",marginLeft:20}}>
                                            <Image  style={{width: 50,height: 50,}} source={require('../assets/contact_images/nearby.png')}/>
                                            <Text style={{paddingTop:10,}}>Nearby {'\n'} Share</Text>
                                        </View>
                                    </View>
                                    
                                    
                                    <TouchableOpacity onPress={()=> setshareModalVisible(false)}>
                                        <View style={{width:250,borderRadius:40,borderColor:"whitesmoke",backgroundColor:"whitesmoke",height:40,justifyContent:"center",borderWidth:1,marginBottom:"8%"}}>
                                            <Text style={{fontSize:18,color:"black",alignSelf:"center"}}>    Cancel   </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View> 
                                
                                
                            </View>
                            </Modal>
                            {/* Modal for share section ends here*/}

                        </View>
                        {/* Share icon ends here */}

                        {/* Delete icon section starts */}
                        <View style={{paddingRight:20,paddingLeft:20}}>
                            <TouchableOpacity onPress={() =>deletes()}>
                                <AntDesign name='delete' size={25} style={{color:"white",paddingRight:10,paddingLeft:12}} />
                                <Text style={{color:"white",fontSize:16,paddingTop:12}}>Delete</Text>   
                            </TouchableOpacity>

                            {/* Modal for delete section starts here */}                            
                            <Modal
                            isVisible={deletesModalVisible}
                            style={{ marginTop: '20%',marginBottom:'20%',marginLeft:'5%',marginRight:'5%' }}
                            backdropOpacity={0.3}
                            onBackdropPress={() => setdeletesModalVisible(false)}
                            onBackButtonPress={() => setdeletesModalVisible(false)}
                            >
                            <View style={styles.deletesModal}>
                                <Text style={{ color: 'black', fontSize: 22,fontWeight:"700" }}>Delete</Text>
                                <View style={{flex:1,flexDirection:"row",paddingTop:20}}>
                                    <Text style={{fontSize:18}}>Are you sure to delete "00{id}.{name}"?</Text>
                                </View>
                                <View style={{flex:1,flexDirection:"row",paddingTop:10}}>
                                    <CheckBox  disabled={false} value={toggleCheckBox} onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
                                    <Text style={{fontSize:18}}>Delete from device</Text>
                                </View>
                                <View style={{flex:1,flexDirection:"row",alignItems:"flex-end",paddingLeft:'20%'}}>
                                    <TouchableOpacity onPress={()=> setdeletesModalVisible(false)}>
                                        <Text style={{color:'steelblue',paddingTop:'5%',paddingRight:10,paddingLeft:'40%',fontWeight:"bold",fontSize:16}}>CANCEL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{paddingRight:10,paddingLeft:10,color:'steelblue',fontWeight:"bold",fontSize:16}}>DELETE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            </Modal>
                            {/* Modal for delete section ends here*/}

                        </View>
                        {/* Delete icon section ends */}
                    </View>
                </View>
                </Modal>
                {/* Main modal for icons ends here */}
                  
            </View>
        </View>
        <DividerTile/>
    </Pressable>
    );
};

const styles = StyleSheet.create({

    leftcontainer: {
        padding: 5,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
    modalInner: {
        height: 200,
        shadowColor: 'slategray',
        shadowOffset: {
          width: 0,
          height: 200,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10.84,
        //: 10,
      },
    imageicon: {
        height: 60,
        width: 70,
        paddingLeft:20,
        paddingTop:15,
        paddingBottom:10,
        marginLeft:20,
        marginRight:10,
       // borderRadius: 25,
    },
    right: {
        color: 'grey',
        alignSelf: 'center',

    },
    bottomModal: {
        width: '100%',
        backgroundColor: 'slategray',
        height: '40%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
       // paddingBottom:15,
       
    },
    editModal: {
        width: 320,
        backgroundColor: 'white',
        height: 450,
        position: 'absolute',
        bottom: 0,
        alignItems: 'flex-start',
        padding:'8%',
      
       // paddingBottom:15,
       
    },

    artworkModal: {
        width: '100%',
        backgroundColor: 'slategray',
        height: '35%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'flex-start',
        justifyContent: 'center',
       // paddingBottom:15,
       
    },
    switch: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 45,
        backgroundColor: 'white',
        paddingLeft: 5,
        marginBottom:20
      },
    pickgalleryModal: {
        width: '100%',
        backgroundColor: 'white',
        height: '45%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems: "center",
        justifyContent: 'center',
        paddingLeft:"10%",
        paddingRight:"10%",
       // paddingBottom:15,
       
    },
    circle:{
        height:2,
        width:2,
        borderRadius:1,
        borderWidth:1,
        borderColor:"black",
        alignItems:"center",
        justifyContent:"center",

    },
    checkedcircle:{
        width:5,
        height:5,
        borderRadius:1,
        backgroundColor:"white",
        borderWidth:1,
    },
    shareModal: {
        width: '100%',
        backgroundColor: 'white',
        height: '58%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems: "center",
        justifyContent: 'center',
        paddingLeft:"10%",
        paddingRight:"10%",
       // paddingBottom:15,
       
    },
     deletesModal: {
        width: '100%',
        backgroundColor: 'white',
        height: '60%',
        position: 'absolute',
        bottom: '20%',
        top:'20%',
       // alignItems: 'center',
        padding:'10%',
        justifyContent: 'center',
       // paddingBottom:15,
       
    },
    circle: {
        backgroundColor: mainStyle.colors.primary,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    modalText: {
        alignSelf:'flex-start',
        padding:10,
        //fontWeight:'bold',
        fontSize:18,
        width:70,
        height:400
      },
    blockModal:{
        //backgroundColor: 'slategray',
        shadowOffset: {
          width: 0,
          height: 900,
        },
           // width:700,
            height:200,
           // backgroundcolor:"white",
    },
    nameLetter: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    
});

export default ContactTile;
