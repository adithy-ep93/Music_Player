import React, { Component } from 'react';
import { Text,View,SafeAreaView,StyleSheet,TouchableOpacity,Pressable,Image,Dimensions,Platform,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import FileViewer from 'react-native-file-viewer';
import Colors from '../../config/colors';
// Import DocumentPicker to pick file to view
import DocumentPicker from 'react-native-document-picker';

const Theme = () => {
  let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9) / 20);
    let imageWidth = dimensions.width;

  const navigation = useNavigation();

  // file Acces
  const selectOneFile = async () => {
    // To Select File
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        
      });
      if (res) {
        let uri = res.uri;
        if (Platform.OS === 'ios') {
         
          uri = res.uri.replace('file://', '');
        }
        console.log('URI : ' + uri);
        FileViewer.open(uri)
          .then(() => {
           
            console.log('Success');
          })
          .catch(_err => {
           
            console.log(_err);
          });
      }
    } catch (err) {
   
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };


  
  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:Colors.primary,flex:1,flexDirection:'column'}}>
         <ScrollView>
            
            <View style={{backgroundColor:Colors.primary}}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                <MaterialIcons name="arrow-back" size={20} color="#fff"/></TouchableOpacity>
                  <View style={styles.innerContainer}>
                      <View style={styles.nameContainer}>
                      <Text style={styles.headerHeading} >Theme</Text></View></View>
                 
              </View>
             </View> 


    {/* Body */}
    <View style={{flex:1,justifyContent:'space-evenly'}}>

                <View style={{flex:1,flexDirection:'row',alignSelf:'center',width:'100%',height:'100%',justifyContent:'space-between',marginTop:10}}>
                      
                      <Pressable style={{ backgroundColor: 'brown',height:100 * 2 ,width:100,marginLeft:16,}} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
                          <TouchableOpacity style={styles.image} onPress={selectOneFile} >
                            <FontAwesome name="upload" size={55} color="#fff" style={{ alignSelf:'center',marginVertical:50}}/></TouchableOpacity>
                      </Pressable>
                       

                      <Pressable style={styles.pressable} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} >
                           <ImageBackground
                            style={styles.image}
                            source={require('../../assets/Theme/img6.jpg')}> 
                            <Ionicons name="checkmark-circle-outline" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:60,}}/>
                             </ImageBackground>
                      </Pressable>

                      <Pressable style={{marginRight:16}} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
                      
                          <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/pink.jpg")}>
                               <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:50}}/> 
                           </ImageBackground>
                      </Pressable>
                </View>

                {/* 2nd row */}

                
                <View style={{flex:1,flexDirection:'row',top:5,alignSelf:'center',width:'100%',height:'100%',justifyContent:'space-between'}}>
                      
                      <Pressable style={{marginLeft:16}} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} >
                      <ImageBackground style={styles.image} source={require("../../assets/Theme/img1.jpg")}>
                    <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 
                            </ImageBackground>
                      </Pressable>
                       
                      <Pressable   android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
                          <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/imag4.jpg")}>
                                  <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 
                              </ImageBackground>
                      </Pressable>

                      <Pressable  style={{marginRight:16}} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
                          <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/pic5.jpg")}>
                                  <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 
                              </ImageBackground>
    
                      </Pressable>
                </View>



        {/* 4th row> */}

        <View style={{flex:1,flexDirection:'row',top:10,alignSelf:'center',width:'100%',height:'100%',justifyContent:'space-between'}}>
                      
                      <Pressable style={{marginLeft:16}} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} >
                      <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/img7.jpg")}>
                              <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 

                      </ImageBackground>
                           
                      </Pressable>
                       
                      <Pressable   android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
                          <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/pic7.jpg")}>
                               <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 
                            </ImageBackground>
                           
                      </Pressable>

                      <Pressable  style={{marginRight:16}} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
                          <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/pic8.jpg")}>
                               <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 
                            </ImageBackground>
                           
                      </Pressable>
                </View>


    {/* 5th row */}
    <View style={{flex:1,flexDirection:'row',top:15,alignSelf:'center',width:'100%',height:'100%',justifyContent:'space-between'}}>
                      
                      <Pressable style={{marginLeft:16}} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} >
                      <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/pic3.jpg")}>
                              <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 

                      </ImageBackground>
                           
                      </Pressable>
                       
                      <Pressable   android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
                          <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/gpic.jpg")}>
                               <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 
                            </ImageBackground>
                           
                      </Pressable>

                      <Pressable  style={{marginRight:16}} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
                          <ImageBackground style={styles.image}
                            source={require("../../assets/Theme/pic6.jpg")}>
                               <FontAwesome name="arrow-circle-o-down" size={35} color="#fff" style={{ alignSelf:'center',marginVertical:55}}/> 
                            </ImageBackground>
                           
                      </Pressable>
                </View>


                

</View>
     

     


        


       

<View style={{height:50,width:50}}></View>
       
</ScrollView>
    </View>

  )
};

export default Theme;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    backgroundColor:Colors.primary,
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
 pressable:{
    width:100,
    height:100 * 2,
  },
image:{
      width:100 * 1,
      height:100 * 2,
    }
  

        
});