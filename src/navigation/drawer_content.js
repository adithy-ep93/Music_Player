import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { Divider } from 'react-native-elements';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../config/colors';


const CustomDrawerContent = ({ navigation, ...props }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.primary }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawer}>
                    {/* <DrawerItemList {...props} /> */}
                    <View style={{ height: 150 , alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'#fff', fontSize:35, fontStyle:'italic'}}>
                            Music Player
                        </Text>
                    </View>
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem
                        style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (<Ionicons
                            name="game-controller"
                            size={size}
                            color={'#fff'} />)
                            
                        }
                        label="Games"
                        onPress={() => navigation.navigate('Aads')}
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem
                        style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (<MaterialIcons
                            name="my-library-music"
                            size={size}
                            color={'#fff'} />)}
                        label="Scan Library"
                        onPress={() => navigation.navigate('Scan')}
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem
                        style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (<Fontisto
                            name="equalizer"
                            size={size}
                            color={'#fff'} />)}
                        label="Equilizer"
                        onPress={() => navigation.navigate("Equalizer")}
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem
                        style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                            <MaterialIcons
                                    name="shuffle"
                                    size={size}
                                    color={'#fff'} />
                        )}
                        label="Shuffle"
                        onPress={() => null}
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem
                        style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                            <Ionicons
                                    name="shirt-outline"
                                    size={size}
                                    color={'#fff'} />
                        )}
                        label="Theme"
                        onPress={() => navigation.navigate("Theme")}
                    />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                            <MaterialIcons
                                    name="widgets"
                                    size={size}
                                    color={'#fff'} />
                        )}
                        label="Widget" onPress={() => navigation.navigate("Widget")} />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                            <MaterialIcons
                                    name="access-alarm"
                                    size={size}
                                    color={'#fff'} />
                        )}
                        label="Sleep Timer" onPress={() => navigation.navigate("SleepTimer")} />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                            <MaterialIcons
                                    name="directions-car"
                                    size={size}
                                    color={'#fff'} />
                        )}
                        label="Drive Mode" onPress={() => navigation.navigate("DriveMode")} />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                    name="gift"
                                    size={size}
                                    color={'#fff'} />
                        )}
                        label="Hot App" onPress={() => navigation.navigate("Aads")} />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    <DrawerItem style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                            <MaterialIcons
                                    name="settings"
                                    size={size}
                                    color={'#fff'} />
                        )}
                        label="Settings" onPress={() => navigation.navigate('Settings')} />
                    <Divider style={{ width: '80%', marginHorizontal: 20 }} />
                    
                    <View style={{ height: 40 }}></View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: Colors.primary,
        
    },
    
});
