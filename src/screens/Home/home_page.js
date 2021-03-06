import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    ToastAndroid
} from 'react-native';
import Colors from '../../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import Music from '../../components/music_player';
import PlayList from './playlist';
import { CheckBox } from 'react-native-elements';
import Ripple from 'react-native-ripple';



const HomePage = ({ navigation }) => {
    const [addmodalVisible, setAddModalVisible] = useState(false);
    const [recoverymodalVisible, setRecoveryModalVisible] = useState(false);
    const [playlistmodalVisible, setPlaylistModalVisible] = useState(false);
    const [editDefaultmodalVisible, setEditDefaultModalVisible] = useState(false);
    const [optionModalVisible, setOptionModalVisible] = useState(false);
    const [checkStatus1, setCheckStatus1] = useState(false);
    const [text, setText] = useState('New list 1');

    return (
        <View style={styles.base}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <MaterialIcons name="menu" size={20} color={'#fff'} />
                </TouchableOpacity>
                <View style={styles.headerTitle}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Music Player</Text>
                    <View style={styles.headIcons}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Aads")}>
                            <MaterialCommunityIcons name="gift" size={20} color={'#fff'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate("Searchlibrary")}>
                            <MaterialIcons name="search" size={20} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.itemBox}>
                        <TouchableOpacity style={styles.folders}
                            onPress={() => navigation.navigate("Tabnavigation")}
                        >
                            <View>
                                <Text style={styles.count}>19</Text>
                                <View style={styles.icon}>
                                    <FontAwesome name="music" size={25} color={Colors.primary} />
                                    <Text style={styles.foldertext}>LIBRARY</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.folders}
                            onPress={() => navigation.navigate("Folder")}
                        >
                            <View>
                                <Text style={styles.count}>5</Text>
                                <View style={styles.icon}>
                                    <FontAwesome name="folder-open" size={25} color={Colors.primary} />
                                    <Text style={styles.foldertext}>FOLDERS</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.folders}
                            onPress={() => navigation.navigate("Favorites")}
                        >
                            <View>
                                <Text style={styles.count}>3</Text>
                                <View style={styles.icon}>
                                    <FontAwesome name="heart" size={25} color={Colors.primary} />
                                    <Text style={styles.foldertext}>FAVORITES</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemBox}>
                        <TouchableOpacity style={styles.folders}
                            onPress={() => navigation.navigate("Recentplay")}
                        >
                            <View>
                                <Text style={styles.count}>6</Text>
                                <View style={styles.icon}>
                                    <MaterialCommunityIcons
                                        name="playlist-play"
                                        size={25}
                                        color={Colors.primary}
                                    />
                                    <Text style={styles.foldertext}>RECENT PLAY</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.folders}
                        onPress={() => navigation.navigate("RecentAdd")}
                        >
                            <View>
                                <Text style={styles.count}>0</Text>
                                <View style={styles.icon}>
                                    <MaterialCommunityIcons
                                        name="playlist-plus"
                                        size={25}
                                        color={Colors.primary}
                                    />
                                    <Text style={styles.foldertext}>RECENT ADD</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.folders}
                            onPress={() => navigation.navigate("Mostplay")}
                        >
                            <View>
                                <Text style={styles.count}>9</Text>
                                <View style={styles.icon}>
                                    <MaterialCommunityIcons
                                        name="playlist-music-outline"
                                        size={25}
                                        color={Colors.primary}
                                    />
                                    <Text style={styles.foldertext}>MOST PLAY</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.playlist}>
                        <Text style={styles.foldertext1
                        }>PLAYLIST</Text>
                        <View style={styles.playlistIcon}>
                            <TouchableOpacity onPress={() => setAddModalVisible(true)}>
                                <MaterialIcons name="add" size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPlaylistModalVisible(true)}>
                                <FontAwesome name="angle-right" size={20} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.itemBox1}>
                        <TouchableOpacity style={styles.folders}
                        onPress={() => navigation.navigate("Defaultlist")}
                        >
                            <View>
                                <Text style={styles.count}>19</Text>
                                <View style={styles.icon}>
                                    <MaterialCommunityIcons
                                        name="playlist-music-outline"
                                        size={25}
                                        color={Colors.primary}
                                    />
                                    <Text style={styles.foldertext}>DEFAULT LIST</Text>
                                </View>
                            </View>
                            {/* <View style={styles.default}>
                                <Text style={styles.count1}>Default list</Text>
                            </View> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.folders1} onPress={() => setAddModalVisible(true)}>
                            <View>
                                <View style={styles.icon}>
                                    <MaterialIcons name="add" size={35} color={Colors.primary} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 100 }}></View>
            </ScrollView>
            <TouchableOpacity style={styles.shuffle} >
                <View >
                    <MaterialIcons name="shuffle" size={25} color={'#fff'} />
                </View>
            </TouchableOpacity>

            {/* MusicFooter */}

            <View style={styles.footer}>
                <Music />
            </View>

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
                            <Text >CANCEL</Text>
                        </TouchableOpacity>
                        <Text >OK</Text>
                    </View>
                </View>
            </Modal>



            {/* PlaylistModal */}
            <View  >
                <Modal
                    isVisible={playlistmodalVisible}
                    style={{ margin: 0 }}
                    backdropOpacity={0.3}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                    onBackdropPress={() => setPlaylistModalVisible(false)}
                    onBackButtonPress={() => setPlaylistModalVisible(false)}


                >
                    <View style={styles.playlistModal}>

                        <View style={styles.header}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity onPress={() => setPlaylistModalVisible(false)}>
                                    <MaterialIcons
                                        name="arrow-back"
                                        size={20}
                                        color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', width: '50%', height: '100%', paddingLeft: 5 }}><Text style={{ fontSize: 20, color: '#fff' }}>Default List</Text></View>
                            <View style={{ width: '45%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: '100%', paddingHorizontal: 10, }}>
                                <TouchableOpacity onPress={()=> navigation.navigate("Aads")}>
                                    <MaterialCommunityIcons
                                        name="gift"
                                        size={20}
                                        color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> navigation.navigate("Searchlibrary")}>
                                    <MaterialIcons
                                        name="search"
                                        size={20}
                                        color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setOptionModalVisible(true)}>
                                    <SimpleLineIcons style={styles.optionButton} name="options-vertical" size={16} color="#fff" />
                                </TouchableOpacity>
                            </View>
                            {/* optionModal */}
                            <Modal
                                isVisible={optionModalVisible}
                                style={{ margin: 0 }}
                                backdropOpacity={0.3}
                                animationIn={'fadeIn'}
                                animationOut={'fadeOut'}
                                onBackdropPress={() => setOptionModalVisible(false)}
                                onBackButtonPress={() => setOptionModalVisible(false)}>
                                <View style={styles.optionmodal}>
                                    <TouchableOpacity style={styles.options} onPress={() => null
                                        // {
                                        //     ToastAndroid.show("No playlists !", ToastAndroid.SHORT);
                                        // }
                                    }>
                                        <Text style={styles.text}>Edit</Text>
                                    </TouchableOpacity >
                                    <TouchableOpacity style={styles.options} onPress={() => setAddModalVisible(true)}>
                                        <Text style={styles.text}>New playlist</Text>
                                    </TouchableOpacity >
                                    <TouchableOpacity style={styles.options} onPress={() => {
                                        ToastAndroid.show("Backup Succeed !", ToastAndroid.SHORT);
                                    }}>
                                        <Text style={styles.text}>Backup list</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.options} onPress={() => setRecoveryModalVisible(true)}>
                                        <Text style={styles.text}>Recovery list</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.options} onPress={() => {
                                        ToastAndroid.show("No empty list can be deleted !", ToastAndroid.SHORT);
                                    }}>
                                        <Text style={styles.text}>Delete empty</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                        <PlayList />
                    </View>
                </Modal>
            </View>

            {/* RecoverModal */}
            <View>
                <Modal
                    isVisible={recoverymodalVisible}
                    style={{ margin: 0 }}
                    backdropOpacity={0.3}
                    // animationIn={''}
                    // animationOut={'slideOutRight'}
                    onBackdropPress={() => setRecoveryModalVisible(false)}
                    onBackButtonPress={() => setRecoveryModalVisible(false)}>
                    <View style={styles.recoverymodal}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.secondary, paddingVertical: 10 }}>Recovery list</Text>
                        <Text style={{  color: Colors.secondary, paddingVertical: 10 }}>Backup list - Feb 4, 2021 21:28:26</Text>
                        <Text style={{ color: Colors.secondary, paddingVertical: 10 }}>Backup list - Feb 4, 2021 01:20:26</Text>
                        <Text style={{ color: Colors.secondary, paddingVertical: 10 }}>Backup list - Feb 3, 2021 11:48:26</Text>
                        <Text style={{  color: Colors.secondary, paddingVertical: 10 }}>Backup list - Feb 1, 2021 01:08:26</Text>
                    </View>
                </Modal>
            </View>


            {/* EditDefaultlistModal */}
            <View  >
                <Modal
                    isVisible={editDefaultmodalVisible}
                    style={{ margin: 0 }}
                    backdropOpacity={0.3}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                    onBackdropPress={() => setEditDefaultModalVisible(false)}
                    onBackButtonPress={() => setEditDefaultModalVisible(false)}


                >
                    <View style={styles.playlistModal}>

                        <View style={styles.header}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity onPress={() => setEditDefaultModalVisible(false)}>
                                    <MaterialIcons
                                        name="arrow-back"
                                        size={20}
                                        color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', width: '50%', height: '100%', paddingLeft: 5 }}><Text style={{ fontSize: 20, color: '#fff' }}>Default List</Text></View>

                        </View>
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={() =>
                                checkStatus1 ? setCheckStatus1(false) : setCheckStatus1(true)
                            }>
                                <View style={styles.check}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.folder}>
                                            <MaterialCommunityIcons
                                                name="playlist-music-outline"
                                                size={355}
                                                color={'#fff'}
                                            />
                                        </View>
                                        <View style={styles.folderData}>
                                            <Text style={{ fontSize: 18, color: '#fff' }}>Default list</Text>
                                            <Text style={{ fontSize: 14, color: '#fff' }}>0 songs</Text>

                                        </View>


                                        <View style={{ width: 100, height: 50, alignSelf: 'flex-end' }}>
                                            <CheckBox
                                                left
                                                checked={checkStatus1}
                                                checkedColor={Colors.secondary}
                                                style={{ alignSelf: 'flex-end' }}

                                            />
                                        </View>

                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={{width:'50%',height:40,borderRadius:5,borderWidth:1,borderColor:'#ffff',position:'absolute',bottom:10,alignSelf:'center',alignItems:'center',justifyContent:'center'}}><Text style={{color:'#ffff',fontSize:18}}>Delete all</Text></View>
                    </View>
                </Modal>
            </View>

        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    base: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.primary,
    },
    header: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: Colors.primary
    },
    headerTitle: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headIcons: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    content: {
        height: '100%',
        width: '100%',
    },
    itemBox: {
        width: '100%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    itemBox1: {
        width: '100%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    folders: {
        width: '30%',
        height: '100%',
        backgroundColor: Colors.secondary,
        margin: 5,
        borderRadius:7
    },
    folders1: {
        width: '30%',
        height: '100%',
        backgroundColor: Colors.secondary,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:7
    },
    count: {
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: Colors.primary,
    },
    count1: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: Colors.primary,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    foldertext: {
        alignSelf: 'center',  
        color: Colors.primary,
    },
    foldertext1: {
        alignSelf: 'center',
        color: Colors.secondary,
    },
    playlist: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        marginVertical: 10,
        elevation: 10
    },
    playlistIcon: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    default: {
        width: '100%',
        height: '25%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:7
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    shuffle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'orange',
        position: 'absolute',
        bottom: 100,
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
       
       
    },
    textfield: {

        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },
    playlistModal: {
        backgroundColor: Colors.primary,
        height: '100%',
        width: '100%'

    },
    optionmodal: {
        width: '50%',
        position: 'absolute',
        right: 5,
        backgroundColor: '#fff',
        top: 10,
        borderRadius: 2

    },
    options: {
        width: '100%',
        padding: 10,
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 13,
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
        width: '60%',
        paddingHorizontal: 20
    },
});
