import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
 import Colors from '../config/colors';

const SwitchTile = ({text, subText}) =>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchOn = () => setIsEnabled((previousState) => previousState);
  function onSwitch  (){
    toggleSwitchOn ();
    toggleSwitch ();
  }

  return (
   <TouchableOpacity onPress={()=> onSwitch()}>

      <View style={{  backgroundColor:Colors.primary, width:'100%'}}>
          <View style={style.switch}>
              <View>
                  <Text style={style.text}>{text}</Text>
                  <Text style={style.subText}>{subText}</Text>
              </View>
              <View style={{height:40}}>
                  <Switch
                      trackColor={{false: '#ffcc00', true: 'white'}}
                      thumbColor={isEnabled ?'white': '#ffcc00'}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                      style={{marginRight:20}}
                  />
              </View>
            </View>
        </View>
   </TouchableOpacity>
  );
}
export default SwitchTile;

const style = StyleSheet.create({
  text: {
    fontSize:16,
    color: 'white',
    paddingLeft:10
  },
  switch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    backgroundColor:Colors.primary,
    // paddingLeft: 5,
    // marginBottom:10,
    marginLeft:20,
    marginTop:20
  },
  subText: {
    fontSize: 12,
    color: 'grey',
    paddingLeft:10
  },
});


