import React from 'react';
import { View } from 'react-native';
import { Text ,ScrollView,StatusBar,StyleSheet,StatusBarHeight,TouchableOpacity,TextInput,Button, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Mostplay = () => {
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
                <Text style={{ fontSize: 20,fontWeight:"bold",alignContent:"center",paddingLeft:40,color:"white"}} >MOST PLAY</Text>  
              <TouchableOpacity>
                <Octicons name="gift" style={{color:"white",paddingLeft:50}} size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <EvilIcons name="search" style={{color:"white",paddingLeft:20}} size={30} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name='dots-three-vertical'style={{color:"white",paddingLeft:14}} size={20} />
              </TouchableOpacity>
            </View>
          </View>

          {/* View for header ends here */}

         {/* View for main content starts here */}

          <View style={{backgroundColor:"steelblue",height:"100%",alignItems:"center",}}>
            <View style={{flex:1,flexDirection:"column"}}>
              <Ionicons name='musical-notes-outline'style={{color:"white",alignSelf:"auto",marginTop:137,marginLeft:100,marginRight:100}} size={90} />
              <Text style={{color:"white",fontSize:17,marginLeft:85,marginRight:85,paddingTop:10}}>No music found</Text>
            </View>
          </View>

          {/* View for main content ends here */}

    </View>
    /* Main view ends here */
  );
}

export default Mostplay;