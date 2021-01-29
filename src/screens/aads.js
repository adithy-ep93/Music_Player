import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Aads = () => {
  return(
   <View style={{backgroundColor: '#f0f8ff',flex: 1,alignItems: 'center'}}>
     <View style={styles.header}>
            
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <AntDesign
                        name="arrowleft"
                        size={25}
                        color={'black'} />
                </View>
           
            <View style={{ justifyContent: 'center', width: '60%', height: '100%', paddingLeft: 10 }}><Text style={{ fontSize: 12, color: 'black', margin: 10 }}>Top Free</Text></View>
                
                  
                
      </View>
      
      <View>
        
        <View style={{width: 300,height:300,borderWidth: 5,borderColor: 'white',backgroundColor: 'white',borderRadius: 4}}>
             <Text style={{ fontSize: 10,color: 'black'}}>Recommended</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 60,padding: 0,right: 10,top:30}} source={require('../assets/pngwing.com.png')}></Image>
             <Image style={{width: 60,height: 60,padding: 0,right: 0,top:30}} source={require('../assets/camera.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 0,left: 10,top:30}} source={require('../assets/photoeditor.jpg')}></Image>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 60,padding: 5,right: 10,top:50}} source={require('../assets/ringtone.jpg')}></Image>
             <Image style={{width: 150,height: 100,padding: 5,top:30,left:0}} source={require('../assets/gallery.jpg')}></Image>
             <Image style={{width: 55,height: 50,padding: 5,top:50,left:10}} source={require('../assets/wheather.jpg')}></Image>
             </View>

             
        </View>
            
                
             

          <View style={{width: 300,height:500,borderWidth: 5,borderColor: 'white',backgroundColor: 'white',borderRadius: 4}}>
             <Text style={{ fontSize: 10,color: 'black',bottom:60}}>TopRated Apps</Text>

             <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 60,padding: 5,right: 10,bottom:45}} source={require('../assets/beautycam.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,right: 0,bottom:45}} source={require('../assets/lock.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,left: 10,bottom:45}} source={require('../assets/clean.png')}></Image>
             </View>

             <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
             <Image style={{width: 60,height: 60,padding: 5,right: 10,bottom:30}} source={require('../assets/camera.jpg')}></Image>
             <Image style={{width: 60,height: 60,padding: 5,right: 10,bottom:30,left:50}} source={require('../assets/videoeditor.jpg')}></Image>
             <Image style={{width: 150,height: 100,padding: 5,left:60,bottom:47}} source={require('../assets/gallery.jpg')}></Image>
             </View>

          </View>
       
      </View>
      
   </View>

  );
}

export default Aads;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },  
   
  imgstyle: {
    width: 25,
    height: 25
  }

});