import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Colors from '../../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = () => {
    return(
        <View>
            <ScrollView>
            <View style={styles.header}>
          <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                    <MaterialIcons
                        name="arrow-back"
                        size={25}
                        color={'#fff'} />
                    </TouchableOpacity>
                    <View style={styles.headerTitle}>
                        <Text style={{color:'#fff', fontSize:25}}>Scan Library</Text>
                       <TouchableOpacity onPress={() => setRightModalVisible(true)}>
                       <Ionicons
                        name="ios-settings-outline"
                        size={25}
                        color={'#fff'} />
                       </TouchableOpacity>
                    </View>
          </View>
            </ScrollView>
        </View>
    );
}

export default Settings;
 const styles = StyleSheet.create({
    header:{
        height:55,
        alignItems:'center',
        flexDirection:'row',
        elevation:10,
        width:'100%',
      paddingHorizontal:20
    },
    headerTitle:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:15
    },
 });