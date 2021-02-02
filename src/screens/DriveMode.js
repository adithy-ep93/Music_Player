import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
const DriveMode =() =>{
    const [savemodalVisible,setsaveModalVisible]=useState(false);
    function save(){
        setsaveModalVisible(false);
        setsaveModalVisible(true);
        };
    return(
        
          <View style={styles.container}>
            <Image style={{resizeMode:'contain',justifyContent:'center',alignSelf:'center',}} source={require('../assests/drivemode.jpg')}/>
            <Text style={styles.textcontent}>
                Safety first! Please follow the traffic regulations while driving,
                and cherish your and other's life!
            </Text>
            <View>

                        <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.cancelButtonContainer}>
                        <Text style={styles.footerText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.okButtonContainer1}>
                        <Text style={styles.footerText}>Ok</Text>
                    </TouchableOpacity>
                </View>
          

        
                    </View>
                    </View>
    );
};

export default DriveMode;

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignSelf:'center',
         padding:20,
         height:'100%',
         backgroundColor:'#221f1f',
         opacity:0.7,
        
    },
    textcontent:{
        fontSize:19,
        textAlign:'justify',
        color:'white',
        padding:20
    },
    cancelButtonContainer: {
        height: 45,
        backgroundColor: '#8c8b89',
        borderRadius: 4,
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    okButtonContainer1: {
        height: 45,
        backgroundColor: '#66c2ff',
        borderRadius: 4,
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        },

    footerText: {
        
       paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        fontSize:16
       
    },
    
      footerContainer: {
      flexDirection:'row',
      justifyContent:'space-between',
      padding:30
       
    },
});