import React,{useState} from 'react';
import { View } from 'react-native';
import { Text ,ScrollView,StatusBar,StyleSheet,StatusBarHeight,TouchableOpacity,TextInput,Button, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

import Colors from '../../config/colors';

const Defaultlist = () => {
  const [rightModalVisible, setrightModalVisible] = useState(false);
  const [sortbyModalVisible, setsortbyModalVisible] = useState(false);
  const navigation = useNavigation();
 
  function right(){
    setrightModalVisible(false);
    setrightModalVisible(true);
  };
  function sortby(){
    
    setsortbyModalVisible(true);
    //setrightModalVisible(false);
  };
  return (

    /* Main View starts here */
    <View>
      {/* View for header starts here */}
        <View>
            <View style={{height:55,backgroundColor:Colors.primary,paddingHorizontal:5,flexDirection:"row",alignItems:"center",justifyContent:'center',elevation:5}}>
              <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                <Feather name="arrow-left" style={{color:"white",paddingLeft:10}} size={30} color="#fff" />
              </TouchableOpacity>
                <Text style={{ fontSize: 20,fontWeight:"bold",alignContent:"center",paddingLeft:40,color:"white"}} >Default list</Text>  
              <TouchableOpacity onPress={()=> navigation.navigate("Aads")}>
                <Octicons name="gift" style={{color:"white",paddingLeft:50}} size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate("Searchlibrary")}>
                <EvilIcons name="search" style={{color:"white",paddingLeft:20}} size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name='dots-three-vertical'style={{color:"white",paddingLeft:20}} size={20} onPress={() =>right()}/>
              </TouchableOpacity>

              {/* Modal that appear from right side starts here */}
              <Modal
              animationIn={"fadeInRight"}
              animationOut={"fadeOutRight"}
              // animationType="slide"
              // transparent={false}
              // presentationStyle="pageSheet"
              isVisible={rightModalVisible}
              style={{ margin: 0}}
              backdropOpacity={0.3}
              // animationIn={''}
              // animationOut={'slideOutRight'}
              onBackdropPress={() => setrightModalVisible(false)}
              onBackButtonPress={() => setrightModalVisible(false)}
              >
              <View style={styles.rightModal}>
                <View style={{flex:1,paddingTop:20}}>
                  <Text style={{fontSize:16,color: 'black',}}>Edit</Text>
                </View>
                <View style={{flex:1}}>
                <TouchableOpacity>
                  <Text style={{fontSize:16,color: 'black',}}>Shuffle</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity>
                  <Text style={{fontSize:16,color: 'black',}}>Add songs</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity  onPress={() =>sortby()}>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'80%',paddingRight:20}}>
                 <Text style={{fontSize:16,color: 'black'}}>Sort by </Text>
                  <AntDesign name='caretright' style={{color:"black",}} size={10}/>
                 </View>
                </TouchableOpacity>                                              
                                              
                {/* Modal for sortby section starts here */}
                  <Modal
                  isVisible={sortbyModalVisible}
                  style={{ margin: 0}}
                  animationIn={"fadeInRight"}
                  animationOut={"fadeOutRight"}
                  backdropOpacity={0.3}
                  // animationIn={''}
                  // animationOut={'slideOutRight'}
                  onBackdropPress={() => setsortbyModalVisible(false)}
                  onBackButtonPress={() => setrightModalVisible(false)}
                  >
                  <View style={styles.sortbyModal}>
                    <View style={{marginBottom:"1%",paddingTop:'10%'}}>
                      <Text style={{ color: 'black', fontSize: 15, }}>Sort by</Text>
                        <View style={{flex:1,paddingTop:20}}>
                          <Text style={{fontSize:16,color: 'black',}}>A-Z</Text>
                        </View>
                        <View style={{flex:1}}>
                          <TouchableOpacity>
                            <Text style={{fontSize:16,color: 'black',}}>Z-A</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                          <TouchableOpacity>
                            <Text style={{fontSize:16,color: 'black',}}>Year</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                          <TouchableOpacity>
                            <Text style={{fontSize:16,color: 'black',}}>Artist</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                          <TouchableOpacity>
                            <Text style={{fontSize:16,color: 'black',}}>Album</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                          <TouchableOpacity>
                            <Text style={{fontSize:16,color: 'black',}}>Folder</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                          <TouchableOpacity>
                            <Text style={{fontSize:16,color: 'black',}}>Date added</Text>
                          </TouchableOpacity>
                          </View>
                            <View style={{flex:1}}>
                          <TouchableOpacity>
                            <Text style={{fontSize:16,color: 'black',}}>Reverse</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
                  {/* Modal for sortby section ends here*/}

                </View>
              </View>
            </Modal>
            {/* Modal that appear from right side ends here*/}

            </View>
          </View>
          {/* View for header ends here */}

        {/* View for main content starts here */}

          <View style={{backgroundColor:Colors.primary,height:"100%",alignItems:"center",}}>
            <View style={{flex:1,flexDirection:"column"}}>
              <Ionicons name='musical-notes-outline'style={{color:"white",alignSelf:"auto",marginTop:137,marginLeft:100,marginRight:100}} size={90} />
              <Text style={{color:"white",fontSize:17,alignSelf:'center'}}>No music found</Text>
              <View style={{paddingTop:40,alignItems:"center",}}>
                <TouchableOpacity>
                  <View style={{borderColor:"white",borderRadius:4,height:40,justifyContent:"center",borderWidth:1}}>
                    <Text style={{fontSize:18,color:"white",alignSelf:'center',padding:15}}>Add songs</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        {/* View for main content ends here */}

    </View>
    /* Main View ends here */
  );
}

const styles = StyleSheet.create({

  rightModal: {
    width: '60%',
    backgroundColor: 'white',
    height: '40%',
    position: 'absolute',
    borderRadius:4,
    top:10 ,
    right:5,
    alignItems: 'flex-start',
    paddingLeft:'10%',
    justifyContent: 'center',
   // paddingBottom:15,
   //marginBottom:"20%"
   
},

sortbyModal: {
  width: '60%',
  backgroundColor: 'white',
  height: '70%',
  position: 'absolute',
  borderRadius:4,
  top:10 ,
  right:5,
  alignItems: 'flex-start',
  paddingLeft:'10%',
  justifyContent: 'center',
 // paddingBottom:15,
 //marginBottom:"20%"
 
},
    
});

export default Defaultlist;