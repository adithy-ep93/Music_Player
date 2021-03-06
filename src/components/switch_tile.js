import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import Colors from '../config/colors';

const SwitchTile = ({text, subText,third,forth,onPress}) =>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchOn = () => setIsEnabled((previousState) => previousState);
  function onSwitch  (){
    toggleSwitchOn ();
    toggleSwitch ();
  }

  return (
   <TouchableOpacity  onPress={()=> onSwitch()}>

      <View style={{backgroundColor:Colors.primary, width:'100%'}}>
          <View style={style.switch}>
              <View style={{marginTop:20}}>
                  <Text style={style.text}>{text}</Text>
                  <Text style={style.subText}>{subText}</Text>
                  <Text  style={style.subText}>{third} </Text>
                  <Text  style={style.subText}>{forth} </Text>
              </View>
              <View style={{height:20}}>
                  <Switch
                      trackColor={{false: '#bdbdbd', true: '#e8eae6'}}
                      thumbColor={isEnabled ? 'yellow' : '#ececec'}
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
    color: '#fff',
    paddingLeft:10,
    
  },
  switch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    backgroundColor: Colors.primary,
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


