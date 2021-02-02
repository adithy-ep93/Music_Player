import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CheckBox, Divider } from 'react-native-elements';
import Colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Music from '../../components/music_player';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal';


const AddPlayList = () => {
    const [bottomModalVisible, setBottomModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <View >
            <View style={{ height: '100%', width: '100%', backgroundColor: Colors.primary }}>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity >
                        <View style={styles.check}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.folder}>
                                    <MaterialCommunityIcons
                                        name="playlist-music-outline"
                                        size={40}
                                        color={'#fff'}
                                    />
                                </View>
                                <View style={styles.folderData}>
                                    <Text style={{ fontSize: 18, color: '#fff' }}>Default list</Text>
                                    <Text style={{ fontSize: 14, color: '#fff' }}>0 songs</Text>

                                </View>
                                <TouchableOpacity onPress={() => setBottomModalVisible(true)}>
                                    <SimpleLineIcons style={styles.optionButton} name="options-vertical" size={16} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <Divider style={{ marginHorizontal: 20, marginVertical: 5 }} />
                <TouchableOpacity style={styles.add}>
                <View >
                    <MaterialIcons name="add" size={30} color={'#fff'} />
                </View>
            </TouchableOpacity>
                <View style={{ width: '100%', position: 'absolute', bottom: 50, }}>

                    <Music />
                </View>

            </View>

            {/* bottomModal */}
            <Modal
                isVisible={bottomModalVisible}
                style={{ margin: 0 }}
                backdropOpacity={0.3}
                // animationIn={''}
                // animationOut={'slideOutRight'}
                onBackdropPress={() => setBottomModalVisible(false)}
                onBackButtonPress={() => setBottomModalVisible(false)}
            >
                <View style={styles.bottomModal}>
                    <Text style={{ color: '#fff', fontSize: 20, marginTop:20 }}>Default list</Text>
                    <View style={{ flexDirection: 'row' ,alignItems:'center', justifyContent:'center'}}>
                        <View style={styles.icons}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}><TouchableOpacity>
                                <AntDesign
                                    name="playcircleo"
                                    size={30}
                                    color={'#fff'}
                                    style={{alignSelf:'center'}}
                                />
                                <Text style={{ alignSelf: 'center', color: '#fff' }}>Play</Text>
                            </TouchableOpacity></View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Ionicons
                                        name="image-outline"
                                        size={30}
                                        color={'#fff'}
                                        style={{alignSelf:'center'}}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Artwork</Text>
                                </TouchableOpacity>
                            </View>


                        </View>

                        <View style={styles.icons}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <MaterialIcons
                                        name="playlist-add"
                                        size={35}
                                        color={'#fff'}
                                        style={{alignSelf:'center'}}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Enqueue</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <EvilIcons
                                        name="share-google"
                                        size={30}
                                        color={'#fff'}
                                        style={{alignSelf:'center'}}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.icons}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Feather
                                        name="edit"
                                        size={30}
                                        color={'#fff'}
                                        style={{alignSelf:'center'}}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Rename list</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        name="delete"
                                        size={30}
                                        color={'#fff'}
                                        style={{alignSelf:'center'}}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Delete list</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </Modal>

            
        </View>
    );
}

export default AddPlayList;

const styles = StyleSheet.create({
    header: {
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 10,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: Colors.shade
    },
    headerTitle: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    folder: {
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    folderData: {
        width: '80%',
        paddingHorizontal: 20
    },
    button: {
        width: 270,
        height: 45,
        borderWidth: 1,
        borderColor: Colors.secondary,
        alignSelf: 'center',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    bottomModal: {
        width: '100%',
        backgroundColor: Colors.primary,
        height: '35%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:15,
        paddingTop:15
    },
    icons: {
        height: '84%',
        width:'35%',
        // backgroundColor: Colors.shade,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent:'center',
        padding:15
    },
    optionmodal:{
        width:'20%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:5,
        backgroundColor:'#fff'

    },
    add: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'orange',
        position: 'absolute',
        bottom: 130,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});