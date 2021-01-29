import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Favhome = () => {
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
                
                  
                 <View style={{ width: '30%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: '100%', paddingHorizontal: 10 }}>
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
  
  });


