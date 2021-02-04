import React, { Component,useState } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,Pressable,Image,StatusBar,Switch,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';

 import Modal from 'react-native-modal';
import SwitchTile from '../../components/switch_tile';
import TextTile  from '../../components/text_tile';
import DividerTile from '../../components/divider';
import CheckBoxTile from '../../components/checkbox_tile';




const Settings = () => {
  const [number, setnumber] = useState('');
  const [showModal, setShowModal] = useState(false);
 const [timeModal, setTimeModal] = useState(false);
 const [trackModal, setTrackModal] = useState(false);
  const navigation = useNavigation();


  
return (
    <View style={{backgroundColor:'#4682B4', height:'100%', width:'100%',flex:1}} >
 <View style={{backgroundColor:'#4169E1'}}> 
                  <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                    <MaterialIcons name="arrow-back" size={20} color="#fff"/></TouchableOpacity>
                      <View style={styles.innerContainer}>
                          <View style={styles.nameContainer}>
                          <Text style={styles.headerHeading} >Settings</Text></View></View>
               </View>
             </View> 

    {/* body */}
    <ScrollView>
    <Text style={styles.titlehead}>Normal settings</Text>
   <View style={{marginLeft:5,marginRight:5,padding:5,borderRadius:10,}}>
   
     
    <TouchableOpacity onPress={() => { setShowModal(!showModal); }}>
        <View style={{backgroundColor:'#4682B4', width:'100%'}}>
          <View style={styles.switch}>
        <View style={{marginTop:20}}>
            <Text style={styles.text}>Desktop Irc</Text>
            <Text style={styles.subText}>Desktop Lyrics closed</Text>
            
        </View>
        <View style={{height:20}}>
            <Switch
                trackColor={{false: '#bdbdbd', true: '#e8eae6'}}
                // thumbColor={isEnabled ? mainStyle.colors.primary : '#ececec'}
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                style={{marginRight:20}}
            />
        </View>
      </View>
  </View>
</TouchableOpacity>







      <DividerTile/>
        <SwitchTile text='Lock screen playing' subText='Show nowplaying when lock screen' />
        <DividerTile/>
        <SwitchTile text='Volume fade in and fade out' subText='Switch songs,the volume is not smooth' /> 
        <DividerTile/>
        <SwitchTile text='Change song by shaking' subText='shake to the next song' /> 
        <DividerTile/> 
        <SwitchTile text='Open nowplaying on play' subText='if this option is enable,click song will enter'  third='now playing page' /> 
        <DividerTile/>
        <SwitchTile text='Click track add to current queue' subText='Click  on song will only add the song into'  third='current queue,will not add/change other' forth='song in current queue' /> 
          <DividerTile/>
          <CheckBoxTile text='Show shuffle button' subText='Custome shuffle button show on list pages' third='or not'/>

      <DividerTile/>
 
      {/* Timeformate Swich */}
      <TouchableOpacity  onPress={() => { setTimeModal(!timeModal); }}>
      <View style={{backgroundColor:'#4682B4', width:'100%'}}>
          <View style={styles.check}>
              <View style={{marginTop:20}}>
                  <Text style={styles.text}>Time format</Text>
                  <Text style={styles.subText}>Choose 12/24h time formate on lock screen
                  {'\n'}
                  pages clock
                  </Text></View>
              <View style={{height:20}}>
              <Ionicons name="chevron-forward" size={25} color="#fff"  style={{marginRight:20}}/>
              </View>
            </View>
        </View>
   </TouchableOpacity>
   <DividerTile/>

        {/* track playlist Click */}

        <TouchableOpacity  onPress={() => { setTrackModal(!trackModal); }} >
      <View style={{backgroundColor:'#4682B4', width:'100%'}}>
          <View style={styles.check}>
              <View style={{marginTop:20}}>
                  <Text style={styles.text}>Smart playlist track limit</Text>
                  <Text style={styles.subText}>Set the limit number for the Recent play &
                  {'\n'}
                  Recent add & Most play
                  </Text></View>
              <View style={{height:20}}>
                    <Text style={{marginRight:20,color:'#fff'}}>No limit</Text>
              </View>
            </View>
        </View>
   </TouchableOpacity>
</View>
{/* next box */}
      <Text style={styles.titlehead}>Headset settings</Text>
      <View>

      <SwitchTile text='Play when inserted' subText='Audo start playing when a wired headset is'  third='inserted'/>
      <DividerTile/>
      <SwitchTile text='Paused when unplugged' subText='Audo stop playing when a wired headset is'  third='unplugged'/>
      <DividerTile/>
      <SwitchTile text='Bluetooth autostop' subText='Auto stop playing when a Bluetooth'  third='headset/A2DP device is disconnected'/>
      <DividerTile/>
      <SwitchTile text='Headset control allowed' subText='open will be able to:'  third='Double:The next one; Third:previous'/>
</View>

{/* next view */}
      <Text style={styles.titlehead}>Others</Text>
    <View>
          <TextTile  headText='Stop Ads'  />
          <TextTile  headText='Rate for Us' />
          <TextTile  headText='Share to my friends'/>
    </View>

 {/* ADD Desktop MODAL */}
<View>
<Modal
           visible={showModal}
           backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={()=> setShowModal(false)}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Permission Settings</Text>
                  <Text>Desktop Lyrics require the Permission 
                    {'\n'}
                    of float window.
                  </Text>
            <View style={{flexDirection:'row',padding:20,}}>
             <TouchableOpacity style={{marginHorizontal:55}} onPress={() => {setShowModal(!showModal);}}> 
             <Text style={{color:'skyblue'}} >CANCEL</Text></TouchableOpacity>
             <TouchableOpacity><Text style={{color:'skyblue'}}>GO TO OPEN</Text></TouchableOpacity>
             </View>
            </View>
            </View>
  </Modal>
  </View>

         {/* Timeformate MODAL */}
<View>
<Modal
           visible={timeModal}
           backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={()=> setTimeModal(false)}>
            <View >
          <View style={{backgroundColor:"white",marginLeft:16,marginRight:16,}}>
            <TouchableOpacity  style={{padding:10,marginTop:16}}><Text >12 hours</Text></TouchableOpacity>
            <TouchableOpacity style={{padding:10,marginTop:16,bottom:10}}><Text>24 hours</Text></TouchableOpacity>

          </View>
          </View>
  </Modal>
  </View>

 {/* ADD playlist track MODAL */}
 <View>
<Modal
           visible={trackModal}
           backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={()=> setTrackModal(false)}>

          <View>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Smart playlist track limit</Text>
          <TextInput
          value={number}
          onChangeText={(number) => setnumber(number)}
          placeholder={'Enter valid number'}
          maxLength={5}
          keyboardType='number-pad'
          style={{borderBottomWidth:1,width:'100%',padding:15}}
        />
            

            <View style={{flexDirection:'row',padding:20,justifyContent:'space-between'}}>
             <TouchableOpacity style={{marginHorizontal:55}}  onPress={() => {setTrackModal(!trackModal);}}> 
             <Text  style={{color:'skyblue'}}>CANCEL</Text></TouchableOpacity>
             
             <TouchableOpacity onPress={() => {setTrackModal(!trackModal);}} ><Text style={{color:'skyblue'}}>OK</Text></TouchableOpacity>
             </View>
            </View>
            </View>
  </Modal>
  </View>












          

  </ScrollView>
</View>
  )
};


export default Settings;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    backgroundColor:'#4169E1',
    alignItems: 'center',
    paddingBottom: 5,
    paddingLeft: 15,
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
        width: '50%',
       marginLeft:16,
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

  text: {
    fontSize:16,
    color: '#fff',
    paddingLeft:10,
    
  },
  check: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 47,
    backgroundColor: '#4682B4',
    paddingLeft: 5,
    marginBottom:20,
   
  },
  subText: {
    fontSize: 12,
    color: '#fff',
    paddingLeft:10,
    fontWeight:'200'
  },
  titlehead:{
    color:'yellow',
    fontSize:14,padding:5,
    marginLeft:20,
    marginTop:10,
    fontWeight:'bold'

  },
// switch
  text: {
    fontSize:16,
    color: '#fff',
    paddingLeft:10,
    
  },
  switch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 47,
    backgroundColor: '#4682B4',
    paddingLeft: 5,
    marginBottom:20,
   
  },
  subText: {
    fontSize: 12,
    color: '#fff',
    paddingLeft:10,
    fontWeight:'200'
  },
  // model
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
     borderRadius: 2,
    padding: 10,
    alignItems: "center",
   },
  modalText: {
    alignSelf:'flex-start',
    padding:10,
    fontWeight:'bold',
    fontSize:18
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    marginLeft:5,marginRight:5,
    padding:5,
    borderRadius:10,
    
  }  




        
});