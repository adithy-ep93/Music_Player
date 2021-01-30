import React, { Component } from 'react';
import { FlatList, StyleSheet,ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
//import Search from './containers/Search/Search/Search.js' 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';



const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 20,
    flexDirection:"column",
    //justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:28,
    paddingTop:20,
    //paddingLeft:10,
    //paddingRight:10,
    height:100,
    backgroundColor: 'slategray', 
  },
  item: {
    padding: 10,
    fontSize: 28,
    color:"white",
    fontWeight:"bold",
    flex:1,
    flexDirection:"column"
  },
  
  container: {
    width: 380,
    flex:1,
    paddingRight:1,
   // borderRadius: 40,
    backgroundColor: 'steelblue',
    flexDirection:"column",
},
});

export default class On extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      StateList:[
        {
          "key": "1",
          "name": "| Wapmallu |-Anuragam M",
          "singer": "|WapMallu.com|",
      
        },
        {
          "key": "2",
          "name": "| AUD-20201023 |-WA0037",
          "singer": "<unknown>",
        },
        {
          "key": "3",
          "name": "| AUD-20201024 |-WA0037",
          "singer": "<unknown>",
        },
        {
          "key": "4",
          "name": "| AUD-20201025 |-WA0037",
          "singer": "<unknown>",
        },
        {
          "key": "5",
          "name": "| AUD-20201026 |-WA0037",
          "singer": "<unknown>",
        },
        {
          "key": "6",
          "name": "| AUD-20201027 |-WA0037",
          "singer": "<unknown>",
        }

      ]
    };
   
  }
  render()
  {
    return(
      
      <View style={styles.header}>
       
        
       <ScrollView>
          <View style={{justifyContent:"center",flexDirection:"column",padding:10}}>
          
            
            </View> 
            
              <View style={styles.container}>
               
                <FlatList
                  data={this.state.StateList}

                  renderItem={({item})=>

                    
                    <Text style={styles.item}>{item.name}{item.singer}</Text>
    
                  }
                  keyExtractor={item=>item.key}
                />

              </View>
              </ScrollView>
      </View>
            
      
    );
  }
}