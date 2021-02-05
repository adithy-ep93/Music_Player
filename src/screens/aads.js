import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation } from '@react-navigation/native';

const Aads = () => {
  const navigation = useNavigation();
    return(


       


        <View style={{alignItems:'center'}}>
          <StatusBar backgroundColor="white" translucent={true} />
            <View style={{ alignItems: 'center',height:60,flexDirection:'row',right: 110,justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>navigation.goBack(null)}>
            <AntDesign
                        name="arrowleft"
                  
                        size={25}
                        color={'black'} />
            </TouchableOpacity>
            
                <Text style={{ fontSize: 17, color: 'black', margin: 10, flexDirection:'row' }}>Top Free</Text>
            </View>
            

                
         <ScrollView>
             
            <View style={{width: 340,height:260,borderWidth: 1,borderColor: 'white',backgroundColor: 'white',borderRadius: 14}}>
               <Text style={{ fontSize: 15,color: 'black',left:12,padding:5}}>Recommended</Text>
              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
               <TouchableOpacity>
                 <Image style={{width: 60,height: 60,right: 0,top:15}} source={require('../assets/pngwing.com.png')}></Image>
                </TouchableOpacity>
                 <Image style={{width: 60,height: 60,left: 50 ,top:15}} source={require('../assets/camera.jpg')}></Image>
                 <Image style={{width: 60,height: 60,left: 90,top:15}} source={require('../assets/photoeditor.jpg')}></Image>
                 <View>
                   <Text style={{top:85,right:265}}>Equalizer</Text>
                   <Text style={{top:65,right:130}}>HD camera</Text>
                   <Text style={{top:49,left:2}}>photoeditor</Text>
                 </View>
              
               </View>

              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Image style={{width: 60,height: 60,padding: 5,right: 0,top:70}} source={require('../assets/ringtone.jpg')}></Image>
                <Image style={{width: 150,height: 100,padding: 5,top:50,left:0}} source={require('../assets/gallery.jpg')}></Image>
                <Image style={{width: 55,height: 50,padding: 5,top:75,left:0}} source={require('../assets/wheather.jpg')}></Image>
              </View>
              <View>
               <Text style={{top:35,right:0}}>Ringtone Cutter</Text>
               <Text style={{left:135,top:15}}>Gallery HD</Text>
               <Text style={{left:260,bottom:4}}>Wheather forecast</Text>
              </View>

             
            </View>



            <View style={{width: 340,height:820,borderWidth: 1,borderColor: 'white',backgroundColor: 'white',borderRadius: 14,top:20,padding:5}}>
               <Text style={{ fontSize: 15,color: 'black',padding:10}}>TopRated Apps</Text>

              <View style={{justifyContent: 'space-between', flexDirection: 'row',padding:5}}>
                   <Image style={{width: 60,height: 60,padding: 5,right: 0,bottom:0}} source={require('../assets/beautycam.jpg')}></Image>
                   <Image style={{width: 60,height: 60,padding: 5,right: 0,bottom:0}} source={require('../assets/lock.jpg')}></Image>
                   <Image style={{width: 60,height: 60,padding: 5,left: 0,bottom:0}} source={require('../assets/clean.png')}></Image>
              </View>
       
              <View>
               <Text style={{bottom:0}}>Beauty Camera</Text>
               <Text style={{bottom:16,left:135}}>Lock Screen</Text>
               <Text style={{left:250,bottom:39}}>Phone Cleaner</Text>
              </View>


             <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 60,padding: 5,right: 0,bottom:7}} source={require('../assets/camera.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,right: 0,bottom:5,left:50}} source={require('../assets/videoeditor.jpg')}></Image>
             <Image style={{width: 150,height: 100,padding: 5,left:40,bottom:25}} source={require('../assets/gallery.jpg')}></Image>
             </View>

             <View>
               <Text style={{bottom:40}}>HD Camera</Text>
               <Text style={{left:130,bottom:60}}>Video Editor</Text>
               <Text style={{left:270,bottom:80}}>Gallery</Text>
              </View>

             <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 60,padding: 5,right:0,bottom:40}} source={require('../assets/hdvideo.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,bottom:40,left:10}} source={require('../assets/booster.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,left:0,bottom:40}} source={require('../assets/qr.jpg')}></Image>
             </View>

             <View>
               <Text style={{bottom:30}}>HD video</Text>
               <Text style={{left:140,bottom:50}}>Volume Booster</Text>
               <Text style={{left:263,bottom:70}}>QR Scanner</Text>
              </View>

             <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 70,padding: 5,right: 0,bottom:40}} source={require('../assets/galleryhd.jpg')}></Image>
             <Image style={{width: 70,height: 60,padding: 5,left: 10,bottom:30}} source={require('../assets/note.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,left:0,bottom:30}} source={require('../assets/camera.jpg')}></Image>
             </View>

             <View>
               <Text style={{bottom:30}}>Gallery 3D</Text>
               <Text style={{left:150,bottom:50}}>Notes</Text>
               <Text style={{left:260,bottom:70}}>Hd Camera</Text>
              </View>

              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Image style={{width: 60,height: 70,padding: 5,right: 0,bottom:40}} source={require('../assets/angrybird.jpg')}></Image>
                <Image style={{width: 70,height: 60,padding: 5,left: 10,bottom:30}} source={require('../assets/templerun.jpg')}></Image>
                <Image style={{width: 60,height: 60,padding: 5,left:0,bottom:30}} source={require('../assets/angrybird.jpg')}></Image>
             </View>

             <View>
               <Text style={{bottom:30}}>Angry Birds</Text>
               <Text style={{left:140,bottom:50}}>Temple Run</Text>
               <Text style={{left:260,bottom:70}}>Angry Birds</Text>
              </View>

           </View>
       

            
           
            
         </ScrollView>
        </View>

    );
}

export default Aads;