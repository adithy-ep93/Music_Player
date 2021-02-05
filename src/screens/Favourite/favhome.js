import React,{useState}from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity, StatusBar} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';

const Favhome = () => {
  const [favModalVisible, setfavModalVisible] = useState(false);
  const [sortbyModalVisible, setsortbyModalVisible] = useState(false);
    return (
        <View style= {styles.container}>
           


       
        <View>
          
            <View style={styles.header}>
            <TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <AntDesign
                        name="arrowleft"
                        size={25}
                        color={'#fff'} />
                </View>
            </TouchableOpacity>
                <View style={{ justifyContent: 'center', width: '60%', height: '100%', paddingLeft: 10 }}><Text style={{ fontSize: 25, color: '#fff' }}>Favourite</Text></View>
                
                  
                 <View style={{ width: '30%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: '100%', paddingHorizontal: 5 }}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="gift"
                        size={25}
                        color={'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <MaterialIcons
                        name="search"
                        size={25}
                        color={'#fff'} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setfavModalVisible(true)}>
                      <Entypo name='dots-three-vertical'style={{color:"white",paddingLeft:5}} size={20} />
                    </TouchableOpacity>
                    {/*modal for threedots*/}
                    <Modal
                              isVisible={favModalVisible}
                              style={{ margin: 0}}
                              backdropOpacity={0.3}
                              animationIn={"fadeInRight"}
                              animationOut={"fadeOutRight"}
                              onBackdropPress={() => setfavModalVisible(false)}
                              onBackButtonPress={() => setfavModalVisible(false)}
                              >
                                <View style={styles.favModal}>
                                              <View style={{marginBottom:"1%",paddingTop:'10%'}}>
                                                 <View style={{flex:1,paddingTop:5}}>
                                                      <Text style={{fontSize:16,color: 'black',}}>Edit</Text>
                                                  </View>
                                                  <View style={{flex:1}}>
                                                      <TouchableOpacity>
                                                          <Text style={{fontSize:16,color: 'black',}}>Shuffle</Text>
                                                      </TouchableOpacity>
                                                  </View>
                                                  <View style={{flex:1,flexDirection:"row"}}>
                                                      <TouchableOpacity>
                                                          <Text style={{fontSize:16,color: 'black',}}>Clear Favourite</Text>
                                                      </TouchableOpacity>
                                                  </View>
                                                  <View style={{flex:1}}>
                                                      <TouchableOpacity>
                                                          <Text style={{fontSize:16,color: 'black',}}>Add Songs</Text>
                                                      </TouchableOpacity>
                                                  </View>
                                                  <View style={{flex:1}}>
                                                      <TouchableOpacity onPress={() => setsortbyModalVisible(true)}>
                                                          <Text style={{fontSize:16,color: 'black',}}>sort by</Text>
                                                      </TouchableOpacity>
                                                  </View>


                                                  {/*modal for sortby */}
                                                  <View  >
                                                     <Modal
                                                            isVisible={sortbyModalVisible}
                                                            style={{ margin: 0}}
                                                            backdropOpacity={0.3}
                                                            animationIn={"fadeInRight"}
                                                            animationOut={"fadeOutRight"}
                                                            onBackdropPress={() => setsortbyModalVisible(false)}
                                                            onBackButtonPress={() => setsortbyModalVisible(false)}
                                                            >

                                                             <View  style={styles.sortModal}>
                                                               

                                                                <View style={{flex:1,paddingTop:0}}>
                                                                  <TouchableOpacity>
                                                                    <Text style={{fontSize:16,color: 'black',}}>sort by</Text>
                                                                  </TouchableOpacity>
                                                                 </View>

                                                                 <View style={{flex:1,paddingTop:20}}>
                                                                   <TouchableOpacity>
                                                                     <Text style={{fontSize:16,color: 'black',}}>A-Z</Text>
                                                                   </TouchableOpacity>
                                                                </View>

                                      
                                                                 

                                                                 <View style={{flex:1,paddingTop:20}}>
                                                                   <TouchableOpacity>
                                                                      <Text style={{fontSize:16,color: 'black',}}>Z-A</Text>
                                                                   </TouchableOpacity>
                                                                 </View>

                                                                 <View style={{flex:1,paddingTop:20}}>
                                                                   <TouchableOpacity>
                                                                     <Text style={{fontSize:16,color: 'black',}}>Year</Text>
                                                                   </TouchableOpacity>
                                                                 </View>

                                                                 <View style={{flex:1,paddingTop:20}}>
                                                                   <TouchableOpacity>
                                                                     <Text style={{fontSize:16,color: 'black',}}>Artist</Text>
                                                                   </TouchableOpacity>
                                                                 </View>

                                                                 <View style={{flex:1,paddingTop:20}}>
                                                                   <TouchableOpacity>
                                                                      <Text style={{fontSize:16,color: 'black',}}>Album</Text>
                                                                   </TouchableOpacity>
                                                                 </View>

                                                                 <View style={{flex:1,paddingTop:20}}>
                                                                   <TouchableOpacity>
                                                                     <Text style={{fontSize:16,color: 'black',}}>Folder</Text>
                                                                   </TouchableOpacity>
                                                                 </View>

                                                                 <View style={{flex:1,paddingTop:20}}>
                                                                   <TouchableOpacity>
                                                                      <Text style={{fontSize:16,color: 'black',}}>Date added</Text>
                                                                   </TouchableOpacity>
                                                                 </View>

                                                                 <View style={{flex:1,paddingTop:20}}>
                                                                   <TouchableOpacity>
                                                                      <Text style={{fontSize:16,color: 'black',}}>Reverse</Text>
                                                                    </TouchableOpacity>
                                                                 </View>
                                                             

                                                             </View>

                                                      </Modal>{/*modal or sortby ends */}
                                                   </View>
 
                                               </View>
                                 </View>
                                  
                          
                    </Modal>{/*moddal for 3 dots end here */}
                    
                 </View>
                
            </View>
            
        </View>


        
        <View style= {styles.sbicon}>
          <Ionicons
            alignItems="center"
            name="musical-notes-outline"
            color={'white'}
            size={100}
            below={300}
            justifyContent="center"/>

        </View>
  
        <View style={styles.txtstyling}>
          <Text style={{color: 'white'}}>No music found</Text>
        </View>
        
        
        <View style= {styles.submitbtn}>  
          <TouchableOpacity>
           <View style={{width: 125,height:33,borderWidth: 1,borderColor: 'white',borderRadius: 5}}><Text style={{color: 'white',fontSize: 15,left:19,padding: 5}}>Add Songs</Text></View>
         </TouchableOpacity>
        </View>
      
      </View>
      
    );
}

export default Favhome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4682b4',
      alignItems: 'center'
      },
    submitbtn: {
      
      alignItems: 'center',
      top: 200 ,
      
      borderRadius: 10,
      padding: 10,
      left: 12,
      width: 500,
      height: 300
    },
    sbicon: {
      alignItems: 'center',
      top: 150 ,
      
      borderRadius: 10,
      padding: 10,
      left: 9,
      width: 200,
      height: 100
    },
    txtstyling: {
      fontSize: 100,
      textAlign: 'center',
      color: 'white',
      left: 9,
      top: 180 ,  
    },
    
  
  header: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10
  },
  favModal: {
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
sortModal: {
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
}

  });


