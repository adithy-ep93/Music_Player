import React,{useState} from 'react';
import { View } from 'react-native';
import { Text ,ScrollView,StatusBar,StyleSheet,StatusBarHeight,TouchableOpacity,TextInput,Button, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';
import {useNavigation} from '@react-navigation/native';

const Mostplay = () => {
  const [mostplayModalVisible, setmostplayModalVisible] = useState(false);
  const navigation = useNavigation();

  function mostplay(){
    setmostplayModalVisible(false);
    setmostplayModalVisible(true);
  };
  return (

    /* Main view starts here */
    <View>
                {/* View for header starts here */}
          <View>
            <View style={{height:55,backgroundColor:Colors.primary,paddingHorizontal:5,flexDirection:"row",alignItems:"center",elevation:5}}>
             <View style={{flexDirection:'row', justifyContent:'space-evenly',width:'100%'}}>
             <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                <Feather name="arrow-left" style={{color:"white",paddingLeft:10}} size={20} color="#fff" />
              </TouchableOpacity >
                <Text style={{ fontSize: 20,alignContent:"center",paddingLeft:40,color:"white", }} >Most Play</Text>  
           <View style={{width:'50%',alignItems:'center',justifyContent:'space-evenly', flexDirection:'row',paddingLeft:50}}>
           <TouchableOpacity onPress={()=> navigation.navigate("Aads")}>
                <Octicons name="gift" style={{color:"white"}} size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate("Searchlibrary")}>
                <EvilIcons name="search" style={{color:"white"}} size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>mostplay()}>
                <Entypo name='dots-three-vertical'style={{color:"white"}} size={20} />
              </TouchableOpacity>
           </View>
             </View>

               {/* Modal for most play section starts here*/}
               <Modal
                isVisible={mostplayModalVisible}
                style={{ margin: 0}}
                backdropOpacity={0.3}
                animationIn={"fadeInRight"}
                animationOut={"fadeOutRight"}
                onBackdropPress={() => setmostplayModalVisible(false)}
                onBackButtonPress={() => setmostplayModalVisible(false)}
                >
                <View style={styles.mostplayModal}>
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
                {/* Modal for mostplay section ends here*/}

            </View>
          </View>
          {/* View for header ends here */}

         {/* View for main content starts here */}
         <View style={{backgroundColor:Colors.primary,height:"100%",alignItems:"center",}}>
            <View style={{flex:1,flexDirection:"column"}}>
              <Ionicons name='musical-notes-outline'style={{color:"white",alignSelf:"auto",marginTop:137,marginLeft:100,marginRight:100}} size={90} />
              <Text style={{color:"white",fontSize:17,alignSelf:'center',paddingTop:10}}>No music found</Text>
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

export default Mostplay;