import React,{useState} from 'react';
import { View } from 'react-native';
import { Text ,ScrollView,StatusBar,StyleSheet,StatusBarHeight,TouchableOpacity,TextInput,Button, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../config/colors';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';



const Recentplay = () => {
  const navigation = useNavigation();

  const [recentplayModalVisible, setrecentplayModalVisible] = useState(false);

  function recentplay(){
    setrecentplayModalVisible(false);
    setrecentplayModalVisible(true);
  };

  return (

    /* Main view starts here */

    <View>
      <StatusBar backgroundColor="slategray" translucent={true} />

        {/* view for header starts here */}
          <View>
            <View style={{height:80,backgroundColor:Colors.primary,paddingHorizontal:5,flexDirection:"row",paddingTop:15,alignItems:"center",elevation:5}}>
              <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                <Feather name="arrow-left" style={{color:"white",paddingLeft:10}} size={30} color="#fff" />
              </TouchableOpacity>
                <Text style={{ fontSize: 20,fontWeight:"bold",alignContent:"center",paddingLeft:32,color:"white"}} >RECENT PLAY</Text>  
              <TouchableOpacity>
                <Octicons name="gift" style={{color:"white",paddingLeft:40}} size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <EvilIcons name="search" style={{color:"white",paddingLeft:20}} size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>recentplay()}>
                <Entypo name='dots-three-vertical'style={{color:"white",paddingLeft:14}} size={20} />
              </TouchableOpacity>

              {/* Modal for recent play section starts here*/}
              <Modal
              isVisible={recentplayModalVisible}
              style={{ margin: 0}}
              backdropOpacity={0.3}
              animationIn={"fadeInRight"}
              animationOut={"fadeOutRight"}
              onBackdropPress={() => setrecentplayModalVisible(false)}
              onBackButtonPress={() => setrecentplayModalVisible(false)}
              >
              <View style={styles.recentplayModal}>
                <View style={{marginBottom:"1%",paddingTop:'10%'}}>
                  <View style={{flex:1,paddingTop:20}}>
                    <Text style={{fontSize:16,color: 'black',}}>Edit</Text>
                  </View>
                  <View style={{flex:1}}>
                    <TouchableOpacity>
                      <Text style={{fontSize:16,color: 'black',}}>Shuffle</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:1,flexDirection:"row"}}>
                    <TouchableOpacity>
                      <Text style={{fontSize:16,color: 'black',}}>Clear Recent play</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              </Modal>
              {/* Modal for recentplay section ends here*/}

            </View>
          </View>
          {/* View for header ends here */}

          {/* view for main content starts here */}

          <View style={{backgroundColor:Colors.primary,alignItems:"center",justifyContent:'center',height:'100%'}}>
            <View style={{flex:1,flexDirection:"column"}}>
              <Ionicons name='musical-notes-outline'style={{color:"white",alignSelf:"auto",marginTop:137,marginLeft:100,marginRight:100}} size={90} />
              <Text style={{color:"white",fontSize:17,paddingTop:10,alignSelf:'center'}}>No music found</Text>
            </View>
          </View>
          {/* View for main content ends here */}

    </View>

    /* Main view ends here */

  );
}

const styles = StyleSheet.create({

  recentplayModal: {
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

export default Recentplay;