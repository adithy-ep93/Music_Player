
import React, {useState} from 'react';
import { View, StyleSheet,Text,Dimensions,TouchableOpacity,Switch,Image} from 'react-native';
import { Slider,} from 'react-native-elements';
// import Colors from '../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';


const Volume = ()=>{

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled1((previousState) => !previousState);
    const toggleSwitchOn = () => setIsEnabled1((previousState) => previousState);
    function onSwitch  (){
        toggleSwitchOn ();
        toggleSwitch ();
      }
      const [isEnabled1, setIsEnabled1] = useState(false);
      const toggleSwitch1 = () => setIsEnabled((previousState) => !previousState);
      const toggleSwitchOn1 = () => setIsEnabled((previousState) => previousState);
      function onSwitch1  (){
        toggleSwitchOn1 ();
        toggleSwitch1();
      }
      const colours = ['#0095ff'];
      const getColour = () => colours[Math.floor(Math.random() * colours.length)];
        const [colour, setColour] = useState(getColour());
        const handleClick = () => { setColour(getColour()); }
    
    
    const [sliderValue, setSliderValue] = useState(100);
    const [sliderValue1, setSliderValue1] = useState(100);


    return(

        

        <View style={styles.mainContainer} >
          <ScrollView>
                {/* <View style={styles.headerContainer}>
      <TouchableOpacity onPress={()=> navigation.goBack(null)}>
      <MaterialIcons name="arrow-back" size={25} color="#fff" />
       </TouchableOpacity>
      <Text style={styles.mainStyle}>Volume</Text>
      </View> */}
<Text style={styles.volumeText}>VOLUME</Text>

<View style={{flexDirection:'column'}}>
          <View style={styles.sliderView}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              {/* <Text style={{color:'white'}}>{sliderValue} </Text> */}
            </View>
            <Slider
              maximumValue={+15}
              minimumValue={-15}
              minimumTrackTintColor={'#4285f4'}
              maximumTrackTintColor="#000000"
              step={1}
              moveVelocityThreshold={2000}
              value={sliderValue}
              onValueChange={(sliderValue) => setSliderValue(sliderValue)}
            //   step={1}
            //   value={6.3}
              thumbStyle={{
                height: 20,
                width: 20,
                backgroundColor: '#4285f4',
                marginHorizontal: 10,
                
              }}
              trackStyle={{
                marginHorizontal: 10,
                backgroundColor: 'transparent',
                borderRadius: 10,
               
              }}
              //  onValueChange={(value) => this.setState({value})}
            />
            </View>
              </View>
              <TouchableOpacity onPress={()=> onSwitch()}>

<View style={{width:'100%'}}>
    <View style={styles.switch}>
        <View>
            <Text style={styles.text}>AMPLIFIER</Text>
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
              {/* <SwitchTile text='AMPLIFIER' style={styles.switchStyle}></SwitchTile> */}

              <View style={{flexDirection:'column'}}>
          <View style={styles.sliderView}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              {/* <Text style={{color:'white'}}>{sliderValue} </Text> */}
            </View>
            <Slider
              maximumValue={+15}
              minimumValue={-15}
              minimumTrackTintColor={'#4285f4'}
              maximumTrackTintColor="#000000"
              step={1}
              
              vertical={true}
              moveVelocityThreshold={2000}
              value={sliderValue1}
              onValueChange={(sliderValue1) => setSliderValue1(sliderValue1)}
              // step={1}
              // value={6.3}
              width={"100%"}
             
              thumbStyle={{
                height: 20,
                width: 20,
                backgroundColor: '#4285f4',
                marginHorizontal: 10,
                
              }}
              trackStyle={{
                marginHorizontal: 10,
                backgroundColor: 'transparent',
                borderRadius: 10,
               
              }}
              //  onValueChange={(value) => this.setState({value})}
            />
            </View>
              </View>

              <View>
                  <Text style={styles.volumeText}>REVERB</Text>
                  <View style={{flexDirection:'row'}}>
                 <TouchableOpacity style={[styles.smallButtonContainer, 
                  { backgroundColor: colour }]} onPress={handleClick} >
                  <LinearGradient colors={['#212121', '#2D3436','#141414' ]} style={styles.gradient}>
                        <Text style={styles.footerText}>SMALL ROOM</Text>
                   </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity 
                     style={[styles.middleButtonContainer, 
                      { backgroundColor: colour }]} onPress={handleClick}
                    >
                    <LinearGradient colors={['#212121', '#2D3436','#141414'  ]} style={styles.gradient}>
                        <Text style={styles.footerText}>MIDDLE ROOM</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[styles.largeButtonContainer, 
                      { backgroundColor: colour }]} onPress={handleClick}
                    >
                    <LinearGradient colors={['#212121', '#2D3436','#141414'  ]} style={styles.gradient}>
                        <Text style={styles.footerText}>LARGE ROOM</Text>
                   </LinearGradient>
                    </TouchableOpacity>

                  </View>

                  <View style={{flexDirection:'row',width:'100%'}}>

                  <TouchableOpacity 
                   style={[styles.mediumhallButtonContainer, 
                    { backgroundColor: colour }]} onPress={handleClick}
                  >
                  <LinearGradient colors={['#212121', '#2D3436','#141414' ]} style={styles.gradient}>
                        <Text style={styles.footerText}>MEDIUM HALL</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[styles.largehallButtonContainer, 
                      { backgroundColor: colour }]} onPress={handleClick}
                    >
                    <LinearGradient colors={['#212121', '#2D3436','#141414'  ]} style={styles.gradient}>
                        <Text style={styles.footerText}>LARGE HALL</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[styles.plateButtonContainer, 
                      { backgroundColor: colour }]} onPress={handleClick}
                    >
                    <LinearGradient colors={['#212121', '#2D3436','#141414'  ]} style={styles.gradient}>
                        <Text style={styles.footerText}>PLATE HALL</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                  </View>

              </View>

              <TouchableOpacity onPress={()=> onSwitch1()}>

<View style={{width:'100%',marginTop:20}}>
    <View style={styles.switch}>
        <View>
            <Text style={styles.text}>SOUND BALANCE</Text>
            {/* <Text style={style.subText}>{subText}</Text> */}
        </View>
        <View style={{height:40}}>
            <Switch
                trackColor={{false: '#bdbdbd', true: '#e8eae6'}}
                thumbColor={isEnabled1 ? '#56b3ff' : '#ececec'}
                onValueChange={toggleSwitch1}
                value={isEnabled1}
                style={{marginRight:20}}
            />
        </View>
      </View>
  </View>
  </TouchableOpacity>
  <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column',justifyContent:'space-between',padding:20,}}>
              <Image style={{resizeMode:'contain',width:140,height:150,}} source={require('../../assests/left.jpg')}/>
              <Text style={{color:'white',fontSize:18,textAlign:'center'}}>Left</Text>
              </View>
              <View style={{flexDirection:'column',justifyContent:'space-between',padding:20}}>
              <Image style={{resizeMode:'contain',width:140,height:150,}} source={require('../../assests/left.jpg')}/>
              <Text style={{color:'white',fontSize:18,textAlign:'center'}}>Right</Text>
            </View >
            </View>

</ScrollView>
</View>
    );
};

const styles=StyleSheet.create({
    mainContainer:{
      backgroundColor: '#212121' ,
    },
    volumeText:{
        color:'white',
        fontSize:18,
        padding:10
    },
    sliderView: {
        // backgroundColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        width: '100%',
        padding: 20,
        // alignSelf:'center',
        // margin: 5,
        // borderRadius: 5,
        // elevation: 5,
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
    mainStyle:{
        color:'white',
        fontSize:20,
        padding:25
       },

       switchStyle:{
        backgroundColor: '#000000',

       },
       smallButtonContainer: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 6,
        margin: 5,
        // elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        // elevation: 5,
    },
    middleButtonContainer: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 6,
        margin: 5,
        // elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        // elevation: 5,
    },
    largeButtonContainer: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 6,
        margin: 5,
        // elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        // elevation: 5,
    },
    mediumhallButtonContainer: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 6,
        margin: 5,
        // elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        // elevation: 5,
    },
    largehallButtonContainer: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 6,
        margin: 5,
        // elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        // elevation: 5,
       
        
    },
    plateButtonContainer: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 6,
        margin: 5,
        // elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        // elevation: 5,
     
      

    
        
    },
        
    
   
    footerText: {
        
        paddingHorizontal: 10,
         paddingVertical: 10,
         borderRadius: 15,
         color: 'white',
         fontWeight: 'bold',
    },
        
     gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5,
       
      },
      btnNormal: {
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 100,
      },
      btnPress: {
        borderColor: 'blue',
        borderWidth: 1,
        height: 30,
        width: 100,
      },
      text: {
        fontSize:18,
        color: 'white',
        paddingLeft:10
      },
      switch: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 45,
        // backgroundColor: 'white',
        paddingLeft: 5,
        marginBottom:20
      },
     
});

export default Volume;

