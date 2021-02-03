import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
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


const HomePage = ({ navigation }) => {
    const [addmodalVisible, setAddModalVisible] = useState(false);
    const [playlistmodalVisible, setPlaylistModalVisible] = useState(false);
    const [optionModalVisible, setOptionModalVisible] = useState(false);
    const [text, setText] = useState('New list 1');

    return (
        <View style={styles.base}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <MaterialIcons name="menu" size={25} color={'#fff'} />
                </TouchableOpacity>
                <View style={styles.headerTitle}>
                    <Text style={{ fontSize: 25, color: '#fff' }}>Music Player</Text>
                    <View style={styles.headIcons}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="gift" size={25} color={'#fff'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="search" size={25} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.itemBox}>
                        <TouchableOpacity style={styles.folders} 
                        onPress={() => navigation.navigate("Library")}
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
                        // onPress={() => navigation.navigate("RecentAdd")}
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
                                <MaterialIcons name="add" size={25} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPlaylistModalVisible(true)}>
                                <FontAwesome name="angle-right" size={25} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.itemBox1}>
                        <TouchableOpacity style={styles.folders} 
                        // onPress={() => navigation.navigate("Defaultlist")}
                        >
                            <View>
                                <Text style={styles.count}>19</Text>
                                <View style={styles.icon}>
                                    <MaterialCommunityIcons
                                        name="playlist-music-outline"
                                        size={40}
                                        color={Colors.primary}
                                    />
                                </View>
                            </View>
                            <View style={styles.default}>
                                <Text style={styles.count1}>Default list</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.folders1} onPress={() => setAddModalVisible(true)}>
                            <View>
                                <View style={styles.icon}>
                                    <MaterialIcons name="add" size={40} color={Colors.primary} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 100 }}></View>
            </ScrollView>
            <TouchableOpacity style={styles.shuffle}>
                <View >
                    <MaterialIcons name="shuffle" size={30} color={'#fff'} />
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
                            <Text style={{ fontSize: 18 }}>CANCEL</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>OK</Text>
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
                                        size={25}
                                        color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', width: '50%', height: '100%', paddingLeft: 5 }}><Text style={{ fontSize: 25, color: '#fff' }}>Default List</Text></View>
                            <View style={{ width: '45%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: '100%', paddingHorizontal: 10, }}>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        name="gift"
                                        size={25}
                                        color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialIcons
                                        name="search"
                                        size={25}
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
                                    <TouchableOpacity style={styles.options}>
                                        <Text style={styles.text}>Edit</Text>
                                    </TouchableOpacity >
                                    <TouchableOpacity style={styles.options}>
                                        <Text style={styles.text}>New playlist</Text>
                                    </TouchableOpacity >
                                    <TouchableOpacity style={styles.options}>
                                        <Text style={styles.text}>Backup list</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.options}>
                                        <Text style={styles.text}>Recovery list</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.options}>
                                        <Text style={styles.text}>Delete empty</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                        <PlayList />
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
        width: '40%',
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
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    itemBox1: {
        width: '100%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        height: 100,
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
    },
    folders1: {
        width: '30%',
        height: '100%',
        backgroundColor: Colors.secondary,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 17,
        color: Colors.primary,
    },
    foldertext1: {
        alignSelf: 'center',
        fontSize: 17,
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
        elevation:10
    },
    playlistIcon: {
        width: '30%',
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
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    shuffle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'orange',
        position: 'absolute',
        bottom: 80,
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
    playlistModal: {
        backgroundColor: Colors.primary,
        height: '100%',
        width: '100%'

    },
    optionmodal: {
        width: '50%',
        height: '35%',


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
        fontSize: 18,
    }
});
