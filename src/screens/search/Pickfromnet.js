import React,{useState} from 'react';
import { View } from 'react-native';
import { Text ,ScrollView,StatusBar,StyleSheet,StatusBarHeight,TouchableOpacity,TextInput,Button, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';


const Pickfromnet = () => {
  const [mostplayModalVisible, setmostplayModalVisible] = useState(false);

  function mostplay(){
    setmostplayModalVisible(false);
    setmostplayModalVisible(true);
  };
  return (

    /* Main view starts here */

    <View>
      <StatusBar backgroundColor="slategray" translucent={true} />

        {/* View for header starts here */}

          <View>
            <View style={{height:80,backgroundColor:"slategray",paddingHorizontal:5,flexDirection:"row",paddingTop:15,alignItems:"center"}}>
              <TouchableOpacity>
                <Feather name="arrow-left" style={{color:"white",paddingLeft:10}} size={30} color="#fff" />
              </TouchableOpacity>
                <Text style={{ fontSize: 20,fontWeight:"bold",alignContent:"center",paddingLeft:40,color:"white"}} >Pick from Internet</Text>  
             
            </View>
          </View>

          {/* View for header ends here */}

         {/* View for main content starts here */}

         <View style={{backgroundColor:"steelblue",height:"100%",alignItems:"center",}}>
            <View style={{flex:1,flexDirection:"column",marginTop:"40%",marginLeft:"31%",marginRight:"31%"}}>
             <View style={{backgroundColor:"slategray",alignItems:"center",height:190,width:190,borderRadius:8,justifyContent:"center"}}>
                   <AntDesign name="loading1" style={{color:"white",alignSelf:"auto"}} size={60} color="#fff" />
                  <Text style={{color:"white",fontSize:18,paddingTop:"10%"}}>Searching on the {'\n'}{"          "} net...</Text>
              </View>
            </View>
          </View>

          {/* View for main content ends here */}

    </View>
    /* Main view ends here */
  );
}

const styles = StyleSheet.create({

  mostplayModal: {
    width: '60%',
    backgroundColor: 'white',
    height: '30%',
    position: 'absolute',
    bottom:0,
    top:50 ,
    left:140,
    alignItems: 'flex-start',
    paddingLeft:'10%',
   justifyContent: 'center',
   // paddingBottom:15,
   //marginBottom:"20%"
   
},


    
});

export default Pickfromnet;