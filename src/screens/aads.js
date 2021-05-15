import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation } from '@react-navigation/native';

const Aads = () => {
  const navigation = useNavigation();
    return(


       


        <View style={{alignItems:'center'}}>
         
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
             
            <View style={{width: "90%",height:260,borderWidth: 1,borderColor: 'white',backgroundColor: '#fff',borderRadius: 14,marginHorizontal:20, alignSelf:'center', margin:5, paddingHorizontal:20}}>
               <Text style={{ fontSize: 15,color: 'black',padding:5}}>Recommended</Text>
              <View style={{flexDirection: 'row', width:'100%', height:100, alignItems:'center', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/pngwing.com.png')}></Image>
                <Text style={{alignSelf:'center'}}>Equalizer</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/camera.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>HD camera</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/photoeditor.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>photoeditor</Text>
                </View>
                </TouchableOpacity>
               </View>

               <View style={{flexDirection: 'row', width:'100%', height:100, alignItems:'center', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/ringtone.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Ringtone Cutter</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/gallery.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Gallery HD</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/wheather.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Wheather forecast</Text>
                </View>
                </TouchableOpacity>
               </View>
            </View>



            <View style={{width: "90%",height:820,borderWidth: 1,borderColor: 'white',backgroundColor: 'white',borderRadius: 14,marginHorizontal:20, alignSelf:'center', margin:5}}>
               <Text style={{ fontSize: 15,color: 'black',padding:10}}>TopRated Apps</Text>

               <View style={{flexDirection: 'row',width:'100%', height:100, alignItems:'center', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/beautycam.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Beauty Camera</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/lock.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Lock Screen</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/clean.png')}></Image>
                <Text style={{alignSelf:'center'}}>Phone Cleaner</Text>
                </View>
                </TouchableOpacity>
               </View>

                <View style={{flexDirection: 'row', width:'100%', height:100, alignItems:'center', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/camera.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>HD Camera</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/videoeditor.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Video Editor</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/gallery.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Gallery</Text>
                </View>
                </TouchableOpacity>
               </View>


             {/* <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 60,padding: 5,right: 0,bottom:7}} source={require('../assets/camera.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,right: 0,bottom:5,left:50}} source={require('../assets/videoeditor.jpg')}></Image>
             <Image style={{width: 150,height: 100,padding: 5,left:40,bottom:25}} source={require('../assets/gallery.jpg')}></Image>
             </View>

             <View>
               <Text style={{bottom:40}}>HD Camera</Text>
               <Text style={{left:130,bottom:60}}>Video Editor</Text>
               <Text style={{left:270,bottom:80}}>Gallery</Text>
              </View> */}

                <View style={{flexDirection: 'row',  width:'100%', height:100, alignItems:'center', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/hdvideo.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>HD video</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/booster.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Volume Booster</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/qr.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>QR Scanner</Text>
                </View>
                </TouchableOpacity>
               </View>

             {/* <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 60,padding: 5,right:0,bottom:40}} source={require('../assets/hdvideo.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,bottom:40,left:10}} source={require('../assets/booster.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,left:0,bottom:40}} source={require('../assets/qr.jpg')}></Image>
             </View>

             <View>
               <Text style={{bottom:30}}>HD video</Text>
               <Text style={{left:140,bottom:50}}>Volume Booster</Text>
               <Text style={{left:263,bottom:70}}>QR Scanner</Text>
              </View> */}

                <View style={{flexDirection: 'row',  width:'100%', height:100, alignItems:'center', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/galleryhd.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Gallery 3D</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/note.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Notes</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/camera.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Hd Camera</Text>
                </View>
                </TouchableOpacity>
               </View>

             {/* <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 70,padding: 5,right: 0,bottom:40}} source={require('../assets/galleryhd.jpg')}></Image>
             <Image style={{width: 70,height: 60,padding: 5,left: 10,bottom:30}} source={require('../assets/note.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,left:0,bottom:30}} source={require('../assets/camera.jpg')}></Image>
             </View>

             <View>
               <Text style={{bottom:30}}>Gallery 3D</Text>
               <Text style={{left:150,bottom:50}}>Notes</Text>
               <Text style={{left:260,bottom:70}}>Hd Camera</Text>
              </View> */}

                <View style={{flexDirection: 'row',  width:'100%', height:100, alignItems:'center', justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/angrybird.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Angry Birds</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/templerun.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Temple Run</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.box}>
                <Image style={styles.image} source={require('../assets/angrybird.jpg')}></Image>
                <Text style={{alignSelf:'center'}}>Angry Birds</Text>
                </View>
                </TouchableOpacity>
               </View>

              {/* <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Image style={{width: 60,height: 70,padding: 5,right: 0,bottom:40}} source={require('../assets/angrybird.jpg')}></Image>
                <Image style={{width: 70,height: 60,padding: 5,left: 10,bottom:30}} source={require('../assets/templerun.jpg')}></Image>
                <Image style={{width: 60,height: 60,padding: 5,left:0,bottom:30}} source={require('../assets/angrybird.jpg')}></Image>
             </View>

             <View>
               <Text style={{bottom:30}}>Angry Birds</Text>
               <Text style={{left:140,bottom:50}}>Temple Run</Text>
               <Text style={{left:260,bottom:70}}>Angry Birds</Text>
              </View> */}

           </View>
       

            
           
            
         </ScrollView>
        </View>

    );
}

export default Aads;

const styles = StyleSheet.create({
  box:{
    height:100,
    width:145,
    // backgroundColor:"cyan",
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    alignSelf:'center',
    borderRadius:4,
    height:60,
    width:60
  }
});