import React, {useState} from 'react';
import { View, StyleSheet,Text,Switch,ScrollView,TouchableWithoutFeedback,Dimensions,Image,} from 'react-native';
// import {Slider} from 'react-native-elements';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';
// import Slider from 'react-native-smooth-slider';
import VerticalSlider from 'rn-vertical-slider';


  const EqualizerPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const toggleSwitchOn = () => setIsEnabled((previousState) => previousState);
    function onSwitch  (){
        toggleSwitchOn ();
        toggleSwitch ();
      }
    const [custommodalVisible, setcustomModalVisible] = useState(false);
    const [editmodalVisible,seteditModalVisible]=useState(false);
    const [savemodalVisible,setsaveModalVisible]=useState(false);
    const [value, onChangeText] = React.useState('custom 1');
      const [sliderValue, setSliderValue] = useState(100);
      const [sliderValue1, setSliderValue1] = useState(100);
      const [sliderValue2, setSliderValue2] = useState(100);
      const [sliderValue3, setSliderValue3] = useState(100);
      const [sliderValue4, setSliderValue4] = useState(100);
      function custom() {
        setcustomModalVisible(false);
        setcustomModalVisible(true);
  };
  function edit(){
    seteditModalVisible(false);
    seteditModalVisible(true);
  };
  function save(){
  setsaveModalVisible(false);
  setsaveModalVisible(true);
  };
  return(
    <View  style={styles.container}>
      <ScrollView>
      {/* <View style={styles.headerContainer}>
      <TouchableOpacity onPress={()=> navigation.goBack(null)}>
      <MaterialIcons name="arrow-back" size={25} color="#fff" />
       </TouchableOpacity>
      <Text style={styles.mainStyle}>Equalizer</Text>
      </View> */}
    <View style={styles.mainContainer} >
    <TouchableOpacity onPress={()=> onSwitch()}>

<View style={{width:'100%'}}>
    <View style={styles.switch}>
        <View>
            <Text style={styles.text}>EQ</Text>
            {/* <Text style={style.subText}>{subText}</Text> */}
        </View>
        <View style={{height:40}}>
            <Switch
                trackColor={{false: '#bdbdbd', true: '#e8eae6'}}
                thumbColor={isEnabled ? '#56b3ff' : '#ececec'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{marginRight:20}}
            />
        </View>
      </View>
  </View>
</TouchableOpacity>
    
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:30}}>
      <TouchableOpacity>
          <Text style={styles.textStyle}  onPress={ () => custom()}>Custom 
           </Text>
           <SimpleLineIcons name="arrow-down" size={12} color="#fff" style={{position:'absolute',left:70,top:5,}} />
         
      </TouchableOpacity>

    
  
   <TouchableOpacity>
     <AntDesign name="edit" size={20} color="#fff" style={{paddingRight:30}} onPress={ () => edit()}/> 
     </TouchableOpacity>

     <TouchableOpacity>
  <AntDesign name="save" size={20} color="#fff"  onPress={ () => save()}/> 
  </TouchableOpacity>
  </View>

   </View>
   <View>
     {/* select modal */}
                <Modal
                isVisible={custommodalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setcustomModalVisible(false)}>
                     <View style={styles.blockModal}>
                       <ScrollView>
                        <Text style={styles.effectText}  onPress={ () => custom()}>Select Effect</Text>
                        <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Custom</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Normal</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Classical</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Dance</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Straightness</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Folk</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Heavy Metal</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}> Hip Hop</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Jazz</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Pop</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Rock</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Acoustic</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Bass_Boost</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Treble Boost</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Vocal Boost</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Headphones</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Deep</Text>
                <Text sstyle={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Electronic</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Latin</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Loud</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Lounge</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Piano</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>RB</Text>
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Custom 1</Text> 
                <Text style={styles.modalText} onPress={()=> setcustomModalVisible(false)}>Custom 2</Text>
                      </ScrollView>
                     </View> 

                </Modal>
                 </View>       
               {/* edit modal */}
               <View>
                <Modal
                isVisible={editmodalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> seteditModalVisible(false)}>
                     <View style={styles.blockModal}>
                       <ScrollView>
                        <Text style={styles.effectText}  >Edit</Text>
                        <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Custom</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Normal</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Classical</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Dance</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Straightness</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Folk</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Heavy Metal</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}> Hip Hop</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Jazz</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Pop</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Rock</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Acoustic</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Bass_Boost</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Treble Boost</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Vocal Boost</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Headphones</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Deep</Text>
                <Text sstyle={styles.modalText} onPress={()=> seteditModalVisible(false)}>Electronic</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Latin</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Loud</Text>
                <Text style={styles.modalText} onPress={()=> sseteditModalVisible(false)}>Lounge</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Piano</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>RB</Text>
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Custom 1</Text> 
                <Text style={styles.modalText} onPress={()=> seteditModalVisible(false)}>Custom 2</Text>
                      </ScrollView>
                     </View> 
                    </Modal> 
                    </View>

            {/* save modal */}
            <View>
                <Modal
                isVisible={savemodalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setsaveModalVisible(false)}>
                     <View style={styles.blockModal}>
                       <ScrollView>
                        <Text style={styles.effectText} >Save</Text>
                      
                       <TextInput
      style={{ height: 40, borderColor: 'grey',borderBottomWidth:1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
                <View style={styles.cancelView}>
                            <TouchableWithoutFeedback onPress={()=> setsaveModalVisible(false)}>
                            <Text style={{paddingLeft:20,fontWeight:'bold'}}>CANCEL</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={()=> setsaveModalVisible(false)}>
                            <Text style={{paddingLeft:20,fontWeight:'bold'}}>OK</Text>
                            </TouchableWithoutFeedback>
                            
                        </View>
                      </ScrollView>
                     </View> 
                    </Modal> 
                    </View>
                    {/* Slider  */}
<View style={{flexDirection:'row',justifyContent:'space-between',margin:0,paddingRight:20}}>
<View
              style={{flexDirection: 'column', justifyContent: 'space-between',paddingLeft:6}}>
              <Text style={{color:'white',padding:6}}>+15</Text>
              <Text style={{color:'white',padding:6}}>0</Text>
              <Text style={{color:'white',padding:6}}>-15</Text>
            </View>


            
                    <VerticalSlider
                      value={1}
                      disabled={false}
                      min={0}
                      max={100}
                      width={15}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"gray"}
                      maximumTrackTintColor={"#4285f4"}
                   />

                      <VerticalSlider
                      value={1}
                      disabled={false}
                      min={0}
                      max={100}
                      width={15}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"gray"}
                      maximumTrackTintColor={"#4285f4"}
                      // showBallIndicator
                      // ballIndicatorColor={"gray"}
                      // ballIndicatorTextColor={"white"}
                      />

                      <VerticalSlider
                      value={1}
                      disabled={false}
                      min={0}
                      max={100}
                      width={15}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"gray"}
                      maximumTrackTintColor={"#4285f4"}
                      // showBallIndicator
                      // ballIndicatorColor={"gray"}
                      // ballIndicatorTextColor={"white"}
                       />

                      <VerticalSlider
                      value={1}
                      disabled={false}
                      min={0}
                      max={100}
                      width={15}
                      height={300}
                      step={1}
                      borderRadius={5}
                      minimumTrackTintColor={"gray"}
                      maximumTrackTintColor={"#4285f4"}
                      // showBallIndicator
                      // ballIndicatorColor={"gray"}
                      // ballIndicatorTextColor={"white"}
                    />

                      <VerticalSlider
                      value={1}
                      disabled={false}
                      min={0}
                      max={100}
                      width={15}
                      height={300}
                      step={1}
                       borderRadius={5}
                      minimumTrackTintColor={"gray"}
                      maximumTrackTintColor={"#4285f4"}
                      // showBallIndicator
                      // ballIndicatorColor={"gray"}
                      // ballIndicatorTextColor={"white"}
                      // ballIndicatorPosition={-50}
                      // ballIndicatorWidth={10}
                      // ballIndicatorHeight={10}
                      
                      />
              
       </View>
       <View
              style={{flexDirection: 'row',justifyContent:'space-between',marginLeft:70}}>
              <Text style={{color:'white',fontSize:12,paddingTop:10,marginRight:25}}>60HZ</Text>
              <Text style={{color:'white',fontSize:12,paddingTop:10,marginRight:10}}>230HZ</Text>
              <Text style={{color:'white',fontSize:12,paddingTop:10,marginRight:15}}>910HZ</Text>
              <Text style={{color:'white',fontSize:12,paddingTop:10,marginRight:15}}>3.6KHZ</Text>
              <Text style={{color:'white',fontSize:12,paddingTop:10,marginRight:15}}>14KHZ</Text>
            </View>
      <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column',justifyContent:'space-between',padding:20,}}>
              <Image style={{resizeMode:'contain',width:140,height:150,}} source={require('../../assests/left.jpg')}/>
              <Text style={{color:'white',fontSize:18,textAlign:'center'}}>Bass</Text>
              </View>
              <View style={{flexDirection:'column',justifyContent:'space-between',padding:20}}>
              <Image style={{resizeMode:'contain',width:140,height:150,}} source={require('../../assests/left.jpg')}/>
              <Text style={{color:'white',fontSize:18,textAlign:'center'}}>Virtualizer</Text>
            </View >
            </View>
            </ScrollView>
    </View>
  );
};

export default EqualizerPage;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#212121' ,
  },
  mainStyle:{
   color:'white',
   fontSize:20,
   padding:25
  },
  textStyle:{
   color:'white',
  paddingRight:50,
   
  },
  mainContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    // height: 55 + StatusBarHeight,
    // backgroundColor: mainStyle.colors.primary,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingTop: StatusBarHeight,
    paddingLeft: 15
},
blockModal:{
  alignSelf:'center',
  justifyContent:'center',
  backgroundColor:'white',
  borderRadius:4,
  padding:20,
  width:'90%'
},
effectText:{
  fontSize:20, 
  fontWeight:'bold',
  padding:10
},
modalText:{
  fontSize: 16,
   textAlign: 'justify',
   padding:10 
},
cancelView:
        {
            flexDirection:'row', 
            alignSelf:'flex-end', 
            justifyContent:'space-around', 
            width:'40%',
            paddingVertical:20
      },
      sliderView: {
       
        // backgroundColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        width: '100%',
       
        alignSelf:'center',
        // margin: 5,
       
       
        borderRadius: 5,
        elevation: 5,
      },
      text: {
        fontSize:18,
        color: 'white',
        paddingLeft:10,
        paddingBottom:15,
        width:'100%'
      },
      switch: {
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 45,
        // backgroundColor: 'white',
        paddingLeft: 5,
        marginBottom:20
      },
});