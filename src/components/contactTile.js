import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Divider from '../components/divider';

const ContactTile = ({ data, name, subname, song, onPress }) => {
    return (
        <Pressable style={{ backgroundColor: '#87CEFA', }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} onPress={onPress}>
            <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
                <View style={styles.circle}>
                    {data ? <Image style={styles.imageicon} source={data} /> : <Text style={styles.nameLetter}>{name[0]}</Text>}
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                    <View style={styles.leftcontainer}>
                        <Text style={styles.maintext}>{name}</Text>
                        <Text style={{ color: 'grey' }}>{subname}</Text>
                    </View>

                        <View style={{ justifyContent: 'center',}}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={styles.right}>{song}</Text> 
                                <Entypo name="dots-three-vertical" size={20} color="#fff"/>
                                </View>
                        </View>
                </View>
            </View>
            <Divider/>
        </Pressable>
        

    );
};

const styles = StyleSheet.create({

    leftcontainer: {
        padding: 5,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    imageicon: {
        width: 50,
        height: 50,
        
    },
    right: {
        color: 'grey',
        alignSelf: 'center',
        marginRight:5

    },
    circle: {
        
        height: 50,
        width: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    nameLetter: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    maintext:{
        color:'#fff'
    }
});

export default ContactTile;
