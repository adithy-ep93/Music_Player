import React, {useState} from 'react';
import { ScrollView, StyleSheet, View,TouchableOpacity,Text,TextInput} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SwitchTile from '../components/SwitchTile';
import Modal from 'react-native-modal';
import colors from '../config/colors';

  const SleepTimer = ({navigation}) => {
  const [exitmodalVisible,setexitmodalVisible]=useState(false);
  function exit()
  {
      setexitmodalVisible(false);
      setexitmodalVisible(true);   
  }
    const Data = [
      {label: 'Close sleep mode',},
      {label: '10 mins',},
      {label: '20 mins',},
      {label: '30 mins',},
      {label: '60 mins',},
      {label: '90 mins'},
      {label:  '',},
      ];
   
      const [text1, setText1] = useState('60');
return(
      <View style={styles.mycontainer} >
            {/* <ImageBackground source={require('../assests/bluebg.jpg')}/> */}
            <View style={styles.headerContainer}>
      <TouchableOpacity onPress={()=> navigation.goBack(null)}>
      <MaterialIcons name="arrow-back" size={25} color="#fff" />
       </TouchableOpacity>
      <Text style={styles.mainStyle}>Sleep Timer</Text>
      </View>
    <ScrollView>

    <View >
          <RadioButtonRN data={Data} selectedBtn={(e) => console.log(e)} box={false} 
           textStyle={{fontSize:16,padding:5,paddingLeft:25,color:'white'}}
           boxStyle={{marginLeft:10,flexDirection:'row-reverse',marginTop:20}}
           circleSize={10} activeColor={'white'}   style={{   }}/>

           <View style={{ flexDirection: 'row', alignItems: 'center' ,bottom:30}}>
             <Text style={{ fontSize: 16, color: '#fff',paddingLeft:30 }}>Manual input{' '}</Text>
             <TextInput
    onChangeText={(text1) => setText1(text1)}
    defaultValue={text1}
    style={styles.textfield}
  />
  <Text style={{ fontSize: 18, color: '#fff' }}>seconds</Text>
  
           </View>

           <View style={{flexDirection:'row',justifyContent:'space-between',}}>
      <Text style={{paddingLeft:30,fontSize:16,color:'white'}}>After the sleep timer end</Text>
      <Text style={{paddingRight:20,color:'white'}} onPress={ () => exit()}>Exit Player</Text>
      
      </View>

           <SwitchTile text='Play to the end regardless of timer'></SwitchTile>
        </View>  

    </ScrollView>

      {/* edit modal */}
      <View>
                <Modal
                isVisible={exitmodalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setexitmodalVisible(false)}>
                     <View style={styles.blockModal}>
                  <Text style={styles.modalText} onPress={()=> setexitmodalVisible(false)}>Stop Playing</Text>
                <Text style={styles.modalText} onPress={()=> setexitmodalVisible(false)}>Exit Playing</Text>
                </View> 
                    </Modal> 
                    </View>


          </View>
    );
    
};

const styles = StyleSheet.create({
  mycontainer: {
  backgroundColor:colors.primary,
  height:'100%'
  },
  headerContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      paddingLeft: 15
  },
  mainStyle:{
      color:'white',
      fontSize:20,
      padding:25
     },
     blockModal:{
      alignSelf:'center',
      justifyContent:'center',
      backgroundColor:'white',
      borderRadius:4,
      padding:20,
      width:'90%'
    },

    modalText:{
      fontSize: 16,
       textAlign: 'justify',
       padding:10 
    },
    textfield: {
      height: 30,
      width: '10%',
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
      paddingVertical: 5,
      color: '#fff',
    },
  
});

export default SleepTimer;
