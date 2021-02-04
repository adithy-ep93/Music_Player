import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import mainStyle from '../config/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckBoxTile = ({text, subText,third}) =>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchOn = () => setIsEnabled((previousState) => previousState);
  function onSwitch  (){
    toggleSwitchOn ();
    toggleSwitch ();
  }

  return (
   <TouchableOpacity  onPress={()=> onSwitch()}>

      <View style={{backgroundColor:'#4682B4', width:'100%'}}>
          <View style={style.check}>
              <View style={{marginTop:20}}>
                  <Text style={style.text}>{text}</Text>
                  <Text style={style.subText}>{subText}</Text>
                  <Text style={style.subText}>{third}</Text>
                  
              </View>
              <View style={{height:20}}>
              <Ionicons name="checkbox" size={25} color="yellow"  style={{marginRight:20}}/>
              </View>
            </View>
        </View>
   </TouchableOpacity>
  );
}
export default CheckBoxTile;

const style = StyleSheet.create({
  text: {
    fontSize:16,
    color: '#fff',
    paddingLeft:10,
    
  },
  check: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 47,
    backgroundColor: '#4682B4',
    paddingLeft: 5,
    marginBottom:20,
   
  },
  subText: {
    fontSize: 12,
    color: '#fff',
    paddingLeft:10,
    fontWeight:'200'
  },
});


