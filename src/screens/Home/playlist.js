import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, TextInput, ToastAndroid, PermissionsAndroid } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Divider } from 'react-native-elements';
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
import {launchImageLibrary } from 'react-native-image-picker';


const PlayList = () => {
    const [bottomModalVisible, setBottomModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [artModalVisible, setArtModalVisible] = useState(false);
    const [addmodalVisible, setAddModalVisible] = useState(false);
    const [text, setText] = useState('New list 1');
    const [filePath, setFilePath] = useState({});
    const navigation = useNavigation();

    //share option
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    //art modal
    function Art() {
        setArtModalVisible(true);
        setBottomModalVisible(false);
    }

    //imagepicker
    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const chooseFile = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        let isStoragePermitted = await requestExternalWritePermission();
        if (isStoragePermitted) {
            launchImageLibrary(options, (response) => {
                console.log('Response = ', response);
                if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
                console.log('base64 -> ', response.base64);
                console.log('uri -> ', response.uri);
                console.log('width -> ', response.width);
                console.log('height -> ', response.height);
                console.log('fileSize -> ', response.fileSize);
                console.log('type -> ', response.type);
                console.log('fileName -> ', response.fileName);
                setFilePath(response);
            });
        }
    };


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
                <TouchableOpacity style={styles.add} onPress={() => setAddModalVisible(true)}>
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
                    <Text style={{ color: '#fff', fontSize: 20, marginTop: 20 }}>Default list</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.icons}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}><TouchableOpacity>
                                <AntDesign
                                    name="playcircleo"
                                    size={30}
                                    color={'#fff'}
                                    style={{ alignSelf: 'center' }}
                                />
                                <Text style={{ alignSelf: 'center', color: '#fff' }}>Play</Text>
                            </TouchableOpacity></View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => Art()}>
                                    <Ionicons
                                        name="image-outline"
                                        size={30}
                                        color={'#fff'}
                                        style={{ alignSelf: 'center' }}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Artwork</Text>
                                </TouchableOpacity>
                            </View>


                        </View>

                        <View style={styles.icons}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    ToastAndroid.show("added to playlist !", ToastAndroid.SHORT);
                                }}>
                                    <MaterialIcons
                                        name="playlist-add"
                                        size={35}
                                        color={'#fff'}
                                        style={{ alignSelf: 'center' }}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Enqueue</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={onShare}>
                                    <EvilIcons
                                        name="share-google"
                                        size={30}
                                        color={'#fff'}
                                        style={{ alignSelf: 'center' }}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.icons}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => setEditModalVisible(true)}>
                                    <Feather
                                        name="edit"
                                        size={30}
                                        color={'#fff'}
                                        style={{ alignSelf: 'center' }}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Rename list</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={()=> setDeleteModalVisible(true)}>
                                    <MaterialCommunityIcons
                                        name="delete"
                                        size={30}
                                        color={'#fff'}
                                        style={{ alignSelf: 'center' }}
                                    />
                                    <Text style={{ alignSelf: 'center', color: '#fff' }}>Delete list</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </Modal>

            {/* EditModal */}
            <Modal
                isVisible={editModalVisible}
                style={{ margin: 0 }}
                animationOut={'fadeOut'}
                backdropOpacity={0.3}
                onBackdropPress={() => setEditModalVisible(false)}>
                <View style={styles.addModal}>
                    <Text style={{ fontSize: 18 }}>Rename list</Text>
                    <TextInput
                        onChangeText={(text) => setText(text)}
                        defaultValue={text}
                        style={styles.textfield}
                    />
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 40,
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                            width: '40%',
                            marginRight: 20,
                        }}>
                        <TouchableOpacity onPress={() => setEditModalVisible(false)}>
                            <Text style={{ fontSize: 18 }}>CANCEL</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>OK</Text>
                    </View>
                </View>
            </Modal>

            {/* ArtWorkModal */}
            <View>
                <Modal
                    isVisible={artModalVisible}
                    style={{ margin: 0 }}
                    backdropOpacity={0.3}
                    // animationIn={''}
                    // animationOut={'slideOutRight'}
                    onBackdropPress={() => setArtModalVisible(false)}
                    onBackButtonPress={() => setArtModalVisible(false)}>
                    <View style={styles.recoverymodal}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: Colors.secondary, paddingVertical: 10 }}>Artwork</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18, color: Colors.secondary, paddingVertical: 10 }}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18, color: Colors.secondary, paddingVertical: 10 }}>Pick from Internet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => chooseFile('photo')}>
                            <Text style={{ fontSize: 18, color: Colors.secondary, paddingVertical: 10 }}>Pick from gallery</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </View>


             {/* DeleteModal */}
             <Modal
                isVisible={deleteModalVisible}
                style={{ margin: 0 }}
                animationIn={'zoomIn'}
                animationOut={'zoomOut'}
                backdropOpacity={0.3}
                onBackdropPress={() => setDeleteModalVisible(false)}>
                <View style={styles.deleteModal}>
                    <Text style={{ fontSize: 20,fontWeight:'700' }}>Delete</Text>
                   <Text style={{color:'grey', fontSize:18,padding:10}}>Are you sure to delete list ?</Text>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                            width: '40%',
                            marginRight: 20,
                        }}>
                        <TouchableOpacity onPress={() => setDeleteModalVisible(false)}>
                            <Text style={{ fontSize: 18,color:'blue' ,padding:5}}>CANCEL</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, color:'blue',padding:5 }}>DELETE</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{height:40,width:100,borderRadius:5,borderWidth:1,borderColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'#ffff', fontSize:16}}>Delete all</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>

       
            {/* AddModal */}
            <Modal
                isVisible={addmodalVisible}
                style={{ margin: 0 }}
                animationOut={'fadeOut'}
                backdropOpacity={0.3}
                onBackdropPress={() => setAddModalVisible(false)}>
                <View style={styles.addModal}>
                    <Text style={{ fontSize: 18 }}>Create a new playlist</Text>
                    <TextInput
                        onChangeText={(text) => setText(text)}
                        defaultValue={text}
                        style={styles.textfield}
                    />
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 40,
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                            width: '40%',
                            marginRight: 20,
                        }}>
                        <TouchableOpacity onPress={() => setAddModalVisible(false)}>
                            <Text style={{ fontSize: 18 }}>CANCEL</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>OK</Text>
                    </View>
                </View>
            </Modal>


        </View>
    );
}

export default PlayList;

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
        paddingBottom: 15,
        paddingTop: 15
    },
    icons: {
        height: '84%',
        width: '35%',
        // backgroundColor: Colors.shade,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 15
    },
    optionmodal: {
        width: '20%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 5,
        backgroundColor: '#fff'

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
    addModal: {
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20,
        height: '30%',
        paddingBottom: 20
    },
    textfield: {

        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },
    recoverymodal: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        backgroundColor: Colors.primary,
        padding: 10,
        paddingLeft: 20,

        justifyContent: "flex-start"
    },
    deleteModal: {
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#ffff',
        alignSelf: 'center',
        padding: 20,
        paddingBottom: 20
    },
    addModal: {
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20,
        height: '30%',
        paddingBottom: 20
    },
    textfield: {

        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },

});